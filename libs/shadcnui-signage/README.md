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

This library builds on top of TheSignAge's existing component foundations:

- **`@tsa/shadcnui`** - Base shadcn/ui components (Button, Card, etc.)
- **`@tsa/shadcnui-blocks`** - Generic UI compositions
- **`common-tailwind`** - Shared Tailwind v4 configuration and theme tokens

`shadcnui-signage` extends these libraries with signage-specific primitives, layouts, and blocks.

## v0.1 Components

### Primitives

- **ScreenFrame** - Preview container enforcing fixed resolutions and aspect ratios

### Layouts

- **SplitScreen** - Deterministic two-zone layout with configurable ratios

### Blocks

- **FullscreenHero** - Hero screen for announcements and welcome messages
- **InfoCardGrid** - Grid layout for menus, promos, and KPIs

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

## Installation

This library is part of TheSignAge monorepo. Import components using the workspace path:

```typescript
import { ScreenFrame, SplitScreen, FullscreenHero, InfoCardGrid } from '@tsa/shadcnui-signage';
```

## Usage Examples

Coming soon - components are currently under development.

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
