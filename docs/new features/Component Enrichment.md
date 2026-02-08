## Spec: Behaviour Components for `shadcnui-signage`

Audience: our developer working in the Nx monorepo, adding React components to the existing shadcn-based signage component library.

---

### Goal

Add a small, opinionated set of **signage-first behaviour primitives** to `libs/shadcnui-signage` that remove repeated boilerplate in real signage screens:

- Rotation and playlists without a CMS
- Dayparting and schedule gating
- Deterministic transitions suitable for always-on screens
- Paged lists that avoid scrolling
- Time primitives (clock and countdown)
- Offline and stale data handling patterns

These must ship with:

- Storybook stories for every component
- Demo site documentation and examples for every component
- A small set of realistic demo screens proving composition

---

## Pre-flight: validate current project state before coding

Before implementing anything, do a short “reality check” against the latest repo state:

1. **Confirm library names and paths**
   - Confirm where `shadcnui-signage` lives (expected: `libs/shadcnui-signage`)
   - Confirm how shared shadcn primitives are imported (expected: `libs/shadcnui` and any wrappers)
   - Confirm existing component conventions: file structure, naming, exports, story patterns

2. **Confirm demo site and Storybook setup**
   - Confirm where the demo site reads component metadata from (MDX, config, route generation)
   - Confirm Storybook location and build command
   - Confirm how nav ordering is currently controlled

3. **Confirm runtime targets**
   - Validate which runtime we are optimising for (browser-only, BrightSign WebView, Electron, etc.)
   - Confirm any known constraints (no WebGL, limited codecs, no service worker, etc.)
   - Confirm React version and Next.js version used in the demo site

Deliverable for this pre-flight is a short checklist comment in the PR description summarising what you validated and any deviations from assumptions.

---

## Component list and scope

Implement the following components in this order:

1. `ContentRotator`
2. `ScheduleGate`
3. `AutoPagingList`
4. `SignageTransition`
5. `Clock`
6. `Countdown`
7. `OfflineFallback`
8. `StaleDataIndicator`

Add a new category on the components page:

- **Behaviour**: rotation, scheduling, transitions, freshness, offline

---

## Cross-cutting requirements

### Determinism and timing

- Avoid timer drift.
- Prefer `setInterval` with correction using `Date.now()` deltas or a “next tick” scheduling loop.
- All components that depend on “now” must accept an optional `now` provider for testing.

Example shape:

```ts
type NowProvider = () => number; // epoch ms
```

### Accessibility

- Support `prefers-reduced-motion` for transition behaviours.
- Ensure no infinite animation is required for core comprehension.
- Any status indicators must be readable, not just colour.

### Styling and composability

- Tailwind classes only, consistent with existing library conventions.
- Components should not impose heavy visual styling by default.
- Provide className hooks for key regions.

### Types and exports

- Strict TypeScript.
- Named exports, consistent with project rules.
- Props interfaces in the component file, exported.

### Testing

- Unit tests for pure scheduling and paging logic where practical.
- Storybook stories serve as behavioural demos.
- Avoid overly brittle animation snapshot tests.

---

## Component specs

### 1) `ContentRotator`

#### Purpose

Rotate between multiple pieces of content on a fixed cadence, with optional transitions and pause controls.

#### API

```ts
export interface ContentRotatorProps {
  children: React.ReactNode[];
  intervalMs: number;
  startIndex?: number;
  isPaused?: boolean;
  transition?: 'none' | 'fade' | 'slide';
  transitionDurationMs?: number;
  now?: () => number;
  onIndexChange?: (index: number) => void;
  className?: string;
}
```

#### Behaviour

- Rotates through children in order.
- If `isPaused` becomes true, it stops advancing but keeps current content mounted.
- Must handle dynamic child count changes without throwing.
- When children change length, clamp index.
- Transition applies between old and new.

#### Storybook stories

- Default rotation, 5s interval
- Pause / resume controls
- Dynamic children list length change
- Reduced motion mode demonstration

#### Demo site

- Add a “Rotating announcements + events” example screen.

---

### 2) `ScheduleGate`

#### Purpose

Conditionally render content based on day-of-week and time windows. Used for dayparting.

#### API

```ts
export type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface ScheduleWindow {
  days?: Weekday[];
  start?: string; // "HH:MM" 24h
  end?: string; // "HH:MM" 24h
  timezone?: string; // optional IANA TZ
}

export interface ScheduleGateProps {
  windows: ScheduleWindow[];
  fallback?: React.ReactNode;
  now?: () => number;
  className?: string;
  children: React.ReactNode;
}
```

#### Behaviour

- Renders children if any window matches.
- Supports windows with only days, only times, or both.
- If `start` > `end`, treat as overnight window (e.g. 22:00-06:00).
- If timezone not provided, use local runtime timezone.

#### Storybook stories

- Weekday office-hours gate
- Overnight window gate
- Multiple windows with fallback content
- Example dayparting: breakfast, lunch, dinner blocks

#### Demo site

- Add a “Daypart menu switcher” example using `ScheduleGate` with clear time windows.

---

### 3) `AutoPagingList`

#### Purpose

Render long lists as pages rather than scrolling, with dwell time per page.

#### API

```ts
export interface AutoPagingListProps<T> {
  items: T[];
  pageSize: number;
  dwellMs: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  getKey?: (item: T, index: number) => React.Key;
  now?: () => number;
  isPaused?: boolean;
  onPageChange?: (pageIndex: number) => void;
  className?: string;
}
```

#### Behaviour

- Pages through items, `pageSize` at a time.
- When at end, loops back to page 0.
- When `items` changes:
  - If keys are stable, attempt to keep the first visible item in view if it still exists.
  - If not possible, reset to page 0.

- No scrolling. Ever.

#### Storybook stories

- Events list paging (e.g. 18 items, page size 5)
- Items update mid-cycle and list reorders
- Pause and resume
- Very large font variant

#### Demo site

- “Departures board” style example showing paging behaviour.

---

### 4) `SignageTransition`

#### Purpose

A constrained transition wrapper designed for signage, predictable and safe.

#### API

```ts
export interface SignageTransitionProps {
  children: React.ReactNode;
  type?: 'none' | 'crossfade' | 'slide-left' | 'slide-up';
  durationMs?: number;
  reducedMotionBehaviour?: 'disable' | 'shorten';
  className?: string;
}
```

#### Behaviour

- Default to `crossfade`, modest duration.
- If reduced motion is enabled:
  - `disable` renders instantly
  - `shorten` reduces duration significantly

- Avoid layout thrash: transitions should not cause reflow surprises.

#### Storybook stories

- Crossfade example
- Slide example
- Reduced motion mode demo

#### Demo site

- Use this inside `ContentRotator` docs as the canonical transition approach.

---

### 5) `Clock`

#### Purpose

A signage-ready clock with large, readable display.

#### API

```ts
export interface ClockProps {
  format?: 'HH:mm' | 'HH:mm:ss';
  timezone?: string;
  locale?: string;
  now?: () => number;
  className?: string;
}
```

#### Behaviour

- Updates once per second only if showing seconds, otherwise once per minute aligned to minute boundary.
- Uses `Intl.DateTimeFormat` where practical.

#### Storybook stories

- HH:mm
- HH:mm:ss
- Timezone example

#### Demo site

- Include as part of a header example.

---

### 6) `Countdown`

#### Purpose

Countdown to a target time, used for “next event in 12:34”.

#### API

```ts
export interface CountdownProps {
  targetEpochMs: number;
  now?: () => number;
  format?: 'mm:ss' | 'HH:mm:ss' | 'human';
  onComplete?: () => void;
  className?: string;
}
```

#### Behaviour

- Ticks once per second.
- Never goes negative, clamp to 0.
- Calls `onComplete` once.

#### Storybook stories

- 90-second countdown
- Completed countdown state

#### Demo site

- Use in an event card example or “store closes in” banner.

---

### 7) `OfflineFallback`

#### Purpose

A boundary for networked content that can render a stable fallback when data fetch fails or is offline.

#### API

```ts
export interface OfflineFallbackProps {
  isOnline?: boolean; // allow app to supply its own signal
  fallback: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
```

#### Behaviour

- If `isOnline` is not provided, use `navigator.onLine` and subscribe to `online/offline` events.
- When offline, render fallback, but do not crash the tree.
- Avoid noisy UI. This is signage, not a diagnostics console.

#### Storybook stories

- Online vs offline toggle
- Fallback content example (static notice)

#### Demo site

- Example showing offline mode for a data-driven zone.

---

### 8) `StaleDataIndicator`

#### Purpose

Show data freshness in a subtle, screen-safe way.

#### API

```ts
export interface StaleDataIndicatorProps {
  lastUpdatedEpochMs: number;
  warnAfterMin?: number;
  staleAfterMin?: number;
  now?: () => number;
  variant?: 'badge' | 'dot' | 'text';
  className?: string;
}
```

#### Behaviour

- Computes age.
- Three states: fresh, warning, stale.
- Must be readable without relying solely on colour, for example include icon or text.

#### Storybook stories

- Fresh
- Warning
- Stale
- Different variants

#### Demo site

- Add to examples where data is fetched.

---

## Demo site updates

### Navigation and docs

- Add **Behaviour** section alongside Primitives, Layouts, Blocks.
- Each component gets its own page with:
  - What it solves, when to use it
  - Props table or clearly documented prop list
  - 1–2 realistic usage examples
  - Notes on signage constraints (timing, always-on, reduced motion)

### Examples

Add at least two full example screens in “Signage Examples”:

1. **Office lobby loop**
   - Header with `Clock`
   - Rotating main content using `ContentRotator` + `SignageTransition`
   - Data freshness using `StaleDataIndicator`

2. **Daypart menu**
   - `ScheduleGate` switches between breakfast, lunch, dinner layouts
   - Uses existing cards and grid blocks

---

## Storybook requirements

For each new component:

- A default story
- At least two behavioural stories that show edge cases
- Controls wired up for key props (intervalMs, dwellMs, isPaused, etc.)
- Where time is involved, provide a story helper that can simulate time by swapping `now`

Also:

- Ensure stories appear in a sensible order under a new `Behaviour/` group.

---

## Acceptance criteria

A PR is complete when:

- All components above exist in `libs/shadcnui-signage` with named exports
- Storybook includes stories for each component, including edge cases
- Demo site documents each component and includes at least two realistic example screens
- Components respect reduced motion and do not rely on fragile animation tricks
- Types are strict, props are documented, and examples compile cleanly
- Pre-flight validation notes are included in the PR description

---

## Non-goals for this batch

- No complex calendar recurrence rules
- No drag and drop layout editors
- No media player wrappers beyond simple offline signalling
- No attempt to replicate CMS playlist authoring UI
