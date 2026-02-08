---
name: 'Repository Basics'
description: 'Fundamental monorepo conventions and contribution guidelines'
applyTo: 'apps/**/*.{ts,tsx,js,jsx}, libs/**/*.{ts,tsx,js,jsx}'
---

# Repository Basics

## Shared Code Location

- **shadcnui** - Core shadcn/ui components organized by category (data-display, feedback, input-controls, layout, navigation, utilities)
- **shadcnui-blocks** - Higher-level composed components (charts, features, pricing, stats, etc.)
- **shell** - Application shell components (layouts, navigation, sidebar, nav-user, team-switcher)
- **landing** - Landing page sections (hero, features, CTA, about, footer, header, steps)
- **common-tailwind** - Shared Tailwind v4 configuration, theme, and CSS utilities
- **storybook-host** - Storybook configuration and documentation

## Naming and Folder Conventions

- Component files: `ComponentName.tsx` + `ComponentName.test.tsx` colocated
- Type files: `feature.types.ts` adjacent to usage
- Hooks: `useFeatureName.ts` in `hooks/` folder
- Utils: `featureUtils.ts` in `utils/` folder
- Constants: `constants.ts` or `feature.constants.ts`
- Named exports only - no default exports
- Story files: `ComponentName.stories.tsx` colocated

## Workspace Settings Security

### VS Code Settings (`.vscode/settings.json`)

The repository includes shared VS Code settings for all contributors. When modifying these settings, consider security implications:

**Terminal Command Auto-Approval:**

The `chat.tools.terminal.autoApprove` setting controls which commands Copilot Chat can run automatically without user confirmation. Use this feature judiciously:

- ✅ **Safe to auto-approve**: Simple package managers with limited scope
  - `pnpm` - Package installation and scripts
  - `npm` - Package operations
- ❌ **Do NOT auto-approve**: Commands that execute arbitrary workspace code
  - `npx nx` - Can run any task defined in workspace
  - `node` - Direct code execution
  - Custom scripts - May contain arbitrary commands

**Rationale**: Contributors may not expect commands to run automatically. Auto-approving commands that execute workspace code creates a security risk if malicious code is introduced.

**Current approved commands:**

```json
{
  "chat.tools.terminal.autoApprove": {
    "pnpm": true
  }
}
```

**When adding new auto-approved commands:**

1. ✅ Command must have limited, predictable scope
2. ✅ Command must not execute arbitrary workspace code
3. ✅ Command must not access sensitive data or credentials
4. ✅ Consider if the convenience outweighs the security risk

## React and JSX Best Practices

### Component Structure

- Use functional components exclusively
- Import hooks directly: `import { useState } from 'react'` not `React.useState`
- Write JSDoc comments for public component APIs
- Keep component files focused (under 300 lines when possible)

### JSX Patterns

- **Avoid useless fragments**: Return single elements directly
  - ❌ Bad: `return <>{singleElement}</>`
  - ✅ Good: `return singleElement`
  - ✅ Good: `return null` when no content
- **Use fragments only when necessary**:
  - Multiple sibling elements
  - Returning multiple elements from a ternary
  - Adding keys to grouped elements
- **Conditional rendering**:
  - Use ternary for two branches: `{condition ? <A /> : <B />}`
  - Use logical AND for single branch: `{condition && <A />}`
  - Return null/undefined for no content (not empty fragments)
- **Props spreading**: Use sparingly and document what props are being spread

### Hooks Best Practices

- Follow Rules of Hooks (top level, no conditionals)
- Ensure exhaustive dependencies in effect/callback/memo hooks
- Use `useCallback` for event handlers passed as props to memoized components
- Use `useMemo` for expensive computations only
- Consider custom hooks for reusable stateful logic

**useCallback Usage:**

```typescript
// ❌ Not needed: callback only used within same component
const handleClick = () => {
  doSomething(data);
};

// ✅ Needed: callback passed as prop to memoized child
const handleClick = useCallback(() => {
  doSomething(data);
}, [data]);
```

**Exhaustive Dependencies Pattern:**

When using `useMemo`, `useCallback`, or `useEffect` with dependencies:

- ✅ **Good**: Destructure object properties first, reference primitives in dependency array

```typescript
function MyComponent({ options }: Props) {
  const { alignTo, enabled, intervalMs, now } = options;

  const resolved = useMemo(
    () => resolveOptions({ alignTo, enabled, intervalMs, now }),
    [alignTo, enabled, intervalMs, now], // Primitive dependencies
  );
}
```

- ❌ **Bad**: Reference object properties in callback but list them individually in deps

```typescript
function MyComponent({ options }: Props) {
  const resolved = useMemo(
    () => resolveOptions(options), // References full object
    [options.alignTo, options.enabled], // Lists individual properties - stale closure risk!
  );
}
```

**Why?** The callback closes over the full object, but dependency array tracks individual properties. If the object reference changes without property changes, the memo won't update but the closure has stale data.

**When NOT to Use useMemo:**

Avoid `useMemo` when:

- The computation is simple/cheap (array operations, basic math, property access)
- The component already rerenders frequently due to state/props changes
- You're only using it to force re-evaluation (use the state change directly instead)

```typescript
// ❌ Bad: useMemo with unused dependency to force re-evaluation
const tick = useTicker({ intervalMs: 60_000 });
const value = useMemo(
  () => computeValue(data),
  [data, tick], // tick is unused but forces re-evaluation
);

// ✅ Good: Compute directly during render (useTicker already causes rerenders)
useTicker({ intervalMs: 60_000 }); // Don't need the return value
const value = computeValue(data); // Recomputes on every render (which is fine)
```

## Component Organization in shadcnui

Components are organized by category in subdirectories:

- `data-display/` - Visual presentation of data (avatar, badge, calendar, card, chart, etc.)
- `feedback/` - User feedback mechanisms (alert, dialog, toast, tooltip, etc.)
- `input-controls/` - Form elements and inputs (button, checkbox, input, select, etc.)
- `layout/` - Layout and structural components (aspect-ratio, resizable, scroll-area, etc.)
- `navigation/` - Navigation elements (breadcrumb, command, dropdown-menu, tabs, etc.)
- `utilities/` - Helper components (form, label, sonner)

## Component Registry Maintenance

### Registry Purpose

The shadcn-compatible registry (`apps/client/public/registry/registry.json`) enables external users to install signage components via `npx shadcn add`. Each registry entry must accurately describe component dependencies and file paths.

### Registry Entry Requirements

When adding or updating registry entries:

- **Verify dependencies**: Only list packages the component actually imports
  - ❌ Bad: Listing `date-fns` when component uses `Intl.DateTimeFormat`
  - ✅ Good: Empty `dependencies: []` when using only React and native APIs
  - ✅ Good: `dependencies: ["lucide-react"]` when importing icons
- **Check imports**: Read the component's actual `import` statements
- **Include transitive files**: List all files copied to user's project (hooks, utilities, types)
- **Use correct GitHub paths**: Point to `main` branch for stable references
- **Set proper types**: Use `"type": "registry:component"` for components, `"registry:lib"` for utilities
- **Verify descriptions match behavior**: Read the component implementation to ensure the `description` field accurately describes what the component actually does
  - ❌ Bad: "Shows elapsed message when time has passed" when component clamps at zero
  - ✅ Good: "When the target is reached, the timer stops at zero"
  - Don't copy descriptions from similar components - verify actual behavior

### Registry Validation Checklist

Before committing registry changes:

1. ✅ Open each component file listed in `files[]`
2. ✅ Review all `import` statements at the top
3. ✅ Extract package names from third-party imports (e.g., `import { format } from 'date-fns'` → add `"date-fns"`)
4. ✅ Exclude internal workspace imports (e.g., `@tsa/shadcnui`)
5. ✅ Exclude React (assumed to be available)
6. ✅ **Check transitive imports** ⚠️ **CRITICAL**:
   - For each included hook/utility file, verify it doesn't import missing types/files
   - Example: `useTicker.ts` imports `time.types.ts` → **must include both**
   - Trace through **ALL** relative imports (`../`, `./`) - missing files break installation
   - This is the most common registry mistake
7. ✅ **Verify description accuracy**: Read the component logic to confirm the description matches actual behavior (not aspirational or copied from similar components)
8. ✅ Test install locally if possible: `npx shadcn add <local-registry-url>/<component-name>`

### Common Registry Mistakes

- Copying dependency list from similar component without verification
- Listing date/time libraries when using native `Intl` APIs
- Forgetting to include supporting files (hooks, types, utilities)
- **Missing transitive type dependencies** (e.g., including `useTicker.ts` without `time.types.ts`)
- Using wrong file type (`registry:component` vs. `registry:lib`)
- **Inaccurate descriptions** that don't match actual component behavior (claiming features that aren't implemented)

### Transitive Dependency Pattern

When a hook or utility is used by multiple components, its type dependencies should be included once in each component's registry entry:

**Example**: `useTicker` hook imports `NowProvider` from `time.types.ts`

```json
{
  "files": [
    { "path": ".../Component.tsx", "type": "registry:component" },
    { "path": ".../useTicker.ts", "type": "registry:lib" },
    { "path": ".../time.types.ts", "type": "registry:lib" }
  ]
}
```

**Why not a shared dependency?** Each component installation is independent - users might install only one component, so it needs all its transitive dependencies.

### Component Installation Instructions

When documenting how to install components (in Getting Started, component docs, etc.):

**Correct pattern:**

```bash
npx shadcn@latest add https://cambridgemonorail.github.io/TheSignAge/registry/registry.json component-name
```

**Key points:**

- Always include the full registry URL with `/registry.json`
- Component name comes after the registry URL (not in the URL path)
- Multiple components: list them space-separated after the registry URL
- Use consistent format across all documentation pages

**Examples:**

```bash
# Single component
npx shadcn@latest add https://cambridgemonorail.github.io/TheSignAge/registry/registry.json clock

# Multiple components
npx shadcn@latest add https://cambridgemonorail.github.io/TheSignAge/registry/registry.json metric-card event-card schedule-gate
```

**Incorrect patterns to avoid:**

- ❌ Two-step process (add registry, then component name alone)
- ❌ Individual component JSON URLs (`/registry/component-name.json`)
- ❌ Registry URL without `/registry.json` suffix
- ❌ Multi-line backslash continuation for component lists

### Component Documentation Pages

When creating or updating component documentation pages (`apps/client/src/app/pages/components/**/*Doc.tsx`):

**"Built On" Section Accuracy:**

- Always verify dependencies and APIs by reading the actual component source code
- Match "Built On" text to actual imports and usage in the component
- Common patterns:
  - Native APIs: "Built on the native Intl.DateTimeFormat API"
  - Third-party libraries: "Built with date-fns-tz for timezone handling"
  - shadcn components: "Built on shadcn Button, Card, and Dialog"
  - No dependencies: "Pure React component with no external dependencies"

**Verification checklist before committing doc pages:**

1. ✅ Open the component source file
2. ✅ Check `import` statements at the top
3. ✅ Verify "Built On" text matches actual dependencies
4. ✅ Confirm "Installation" command matches repo pattern
5. ✅ Test code examples actually work with the component API
6. ✅ Ensure Storybook and GitHub links are correct

**Common documentation mistakes:**

- Claiming date-fns dependency when component uses native `Intl` APIs
- Copying "Built On" text from similar component without verification
- Outdated installation commands that don't match current registry pattern
- Code examples that don't match actual component props/API

## What Makes a Good PR

- **Scope:** One logical change per PR (avoid mixing features, refactors, and fixes)
- **Size:** Keep PRs reviewable (< 500 lines changed when possible)
- **Tests:** Include tests for new features and bug fixes
- **Validation:** Run `typecheck`, `lint`, and `test` commands before pushing
- **Description:** Explain what changed and why
- **Conventional Commits:** Use conventional commit format (feat:, fix:, docs:, etc.)
- **No breaking builds:** Never commit code that fails validation
- **Affected projects:** Use Nx affected commands to validate only changed projects
- **No terminal logs:** Never commit terminal output files (verification logs, lint output, etc.)
  - ❌ Bad: Committing `verification-complete.txt`, `lint-output.txt`, `validation-output.txt`
  - ✅ Good: Include verification evidence in PR description as markdown code blocks
  - Files matching `*-output.txt` and `*-complete.txt` are gitignored
