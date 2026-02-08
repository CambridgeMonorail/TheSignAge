# shadcnui-signage

React component library for building digital signage screens, optimized for fixed-aspect displays, distance readability, and predictable layouts.

## Purpose

This library provides components specifically designed for digital signage use cases where:

- Screens have fixed aspect ratios and known resolutions
- Typography needs to be optimized for distance viewing
- Layouts must render predictably without responsive breakpoints
- Content is simple and deterministic

Think PowerPoint slides with occasional interactivity, not complex web applications.

## Relationship to Other Libraries

This library builds on top of The Sign Age's existing component foundations:

- **`@tsa/shadcnui`** - Base shadcn/ui components (Button, Card, etc.)
- **`@tsa/shadcnui-blocks`** - Generic UI compositions
- **`common-tailwind`** - Shared Tailwind v4 configuration and theme tokens

`shadcnui-signage` extends these libraries with signage-specific primitives, layouts, blocks, and behaviors.

## Component Categories

### Primitives

Core building blocks for signage content:

- **ScreenFrame** - Preview container enforcing fixed resolutions and aspect ratios with optional safe area guides
- **MetricCard** - Display KPIs and metrics with values, change indicators, and icons
- **EventCard** - Event information with time, title, speaker, location, and track
- **AnnouncementCard** - Announcement cards with glass morphism effects

### Layouts

Container components for structuring signage content:

- **SplitScreen** - Two-panel layout with configurable ratio and direction
- **SignageContainer** - Full-screen container with gradient backgrounds and ambient orb effects (8 color variants)
- **SignageHeader** - Standard signage header with optional tag badge, title, and subtitle

### Blocks

Higher-level composed components for complete content sections:

- **FullscreenHero** - Hero section for welcome screens and main messages (light/dark variants)
- **InfoCardGrid** - Grid layout for displaying informational cards with icons and descriptions

### Behaviors

Components that add time-based logic, transitions, and interactivity:

- **Clock** - Displays current time with configurable format and timezone (minute-aligned updates)
- **Countdown** - Counts down to a target date/time with configurable format
- **ContentRotator** - Cycles through children at fixed intervals with transitions (fade/slide)
- **AutoPagingList** - Renders long lists as pages with automatic advancement
- **ScheduleGate** - Conditionally renders content based on weekday and time windows
- **StaleDataIndicator** - Visual indicator for data freshness with configurable thresholds
- **SignageTransition** - Declarative transitions (none, crossfade, slide-left, slide-up) for content changes
- **OfflineFallback** - Gracefully handles offline state with configurable UI

## Key Features

### Time-Based Logic

- **useTicker** - Drift-resistant ticker hook for timed rerenders (second/minute alignment)
- Native `Intl.DateTimeFormat` API for timezone-aware formatting
- `date-fns-tz` integration for complex timezone scheduling
- Minute-aligned updates for clock components (efficient battery usage)

### Transitions and Motion

- **SignageTransition** - Declarative transition effects (none, crossfade, slide-left, slide-up)
- Automatic `prefers-reduced-motion` detection via `usePrefersReducedMotion` hook
- Configurable durations with sensible defaults

### Data Freshness

- **StaleDataIndicator** - Visual feedback when data age exceeds thresholds
- Configurable warning (yellow) and stale (red) durations
- Useful for API-driven content with known update frequencies

### Offline Support

- **OfflineFallback** - Graceful degradation when network is unavailable
- Built-in connectivity detection managed internally by OfflineFallback
- Configurable fallback UI with message and retry actions

## Concepts

### Resolution

Components are designed for specific target resolutions:

- `1080p`: 1920 × 1080 (landscape)
- `4k`: 3840 × 2160 (landscape)
- `portrait-1080p`: 1080 × 1920 (portrait)

### Safe Area

Optional overlay for previewing content margins and safe zones during development and QA.

### Text Clamping

Ensures text never overflows by limiting to a maximum number of lines, maintaining layout predictability.

### Deterministic Layouts

All layout components use fixed sizing and explicit aspect ratios. No responsive breakpoints—signage knows its screen size at build time.

## Installation

This library is part of The Sign Age monorepo. Import components using the workspace path:

```typescript
import { ScreenFrame, SplitScreen, FullscreenHero, InfoCardGrid } from '@tsa/shadcnui-signage';
```

## Usage Examples

### Basic Clock Display

```typescript
import { Clock } from '@tsa/shadcnui-signage';

export function Header() {
  return <Clock format="HH:mm" className="text-6xl tabular-nums" />;
}
```

### Content Rotation

```typescript
import { ContentRotator } from '@tsa/shadcnui-signage';

export function AnnouncementRotator() {
  return (
    <ContentRotator intervalMs={10_000} transition="fade">
      <Announcement1 />
      <Announcement2 />
      <Announcement3 />
    </ContentRotator>
  );
}
```

### Schedule-Based Content

```typescript
import { ScheduleGate } from '@tsa/shadcnui-signage';

export function BreakfastMenu() {
  return (
    <ScheduleGate
      windows={[
        { days: ['mon', 'tue', 'wed', 'thu', 'fri'], start: '06:00', end: '11:00' }
      ]}
      fallback={<LunchMenu />}
    >
      <MenuGrid items={breakfastItems} />
    </ScheduleGate>
  );
}
```

### Full-Screen Hero

```typescript
import { FullscreenHero, SignageContainer } from '@tsa/shadcnui-signage';

export function WelcomeScreen() {
  return (
    <SignageContainer variant="midnight">
      <FullscreenHero
        title="Welcome to Our Office"
        subtitle="Check in at the front desk"
        variant="dark"
      />
    </SignageContainer>
  );
}
```

### Auto-Paging List

```typescript
import { AutoPagingList } from '@tsa/shadcnui-signage';

export function EventSchedule({ events }) {
  return (
    <AutoPagingList
      items={events}
      itemsPerPage={8}
      pageDwellMs={15_000}
      renderItem={(event) => <EventCard {...event} />}
    />
  );
}
```

## Testing

Run unit tests for this library:

```bash
pnpm test:shadcnui-signage
```

Run with coverage:

```bash
pnpm test:shadcnui-signage --coverage
```

## Development

Build the library:

```bash
pnpm build:shadcnui-signage
```

Type check:

```bash
pnpm type-check:shadcnui-signage
```

Lint:

```bash
pnpm lint:shadcnui-signage
```

## Storybook

All components include Storybook stories for interactive documentation. View them in the main Storybook instance:

```bash
pnpm storybook
```

## License

See LICENSE file in repository root.
