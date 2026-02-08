# The Sign Age: Roadmap

This document outlines the planned evolution of The Sign Age project. Items are grouped by theme rather than strict timeline—priorities may shift based on real-world usage and feedback.

**Current Status:** Alpha (v0.x) - Core library functional but evolving

---

## ✅ Completed (Q4 2025 - Q1 2026)

### Foundation
- [x] Nx + pnpm monorepo structure
- [x] Tailwind v4 configuration and theme system
- [x] shadcn/ui base components (`@tsa/shadcnui`)
- [x] Vitest + Testing Library test infrastructure
- [x] Storybook setup for component documentation
- [x] GitHub Actions CI/CD pipeline
- [x] GitHub Pages deployment (client + Storybook)

### Core Signage Library (`@tsa/shadcnui-signage`)

#### Primitives
- [x] ScreenFrame (resolution enforcement, safe area guides)
- [x] MetricCard (KPI display with change indicators)
- [x] EventCard (event information layout)
- [x] AnnouncementCard (glass morphism announcement cards)

#### Layouts
- [x] SplitScreen (two-panel deterministic layout)
- [x] SignageContainer (gradient backgrounds, ambient orbs)
- [x] SignageHeader (standard header with tag/title/subtitle)

#### Blocks
- [x] FullscreenHero (welcome screens, hero sections)
- [x] InfoCardGrid (grid layout for menus/promos)

#### Behaviors
- [x] Clock (timezone-aware, minute-aligned updates)
- [x] Countdown (target date countdown)
- [x] ContentRotator (interval-based content cycling)
- [x] AutoPagingList (automatic list pagination)
- [x] ScheduleGate (weekday/time-based conditional rendering)
- [x] StaleDataIndicator (data freshness visualization)
- [x] SignageTransition (declarative transitions)
- [x] OfflineFallback (graceful offline handling)

#### Hooks & Utilities
- [x] useTicker (drift-resistant interval hook)
- [x] useOnlineStatus (connectivity detection)
- [x] usePrefersReducedMotion (accessibility)
- [x] Resolution utilities (1080p/4K/portrait detection)
- [x] Text clamping utilities

### Documentation & Tooling
- [x] Component registry for `npx shadcn add` installation
- [x] GitHub Copilot instructions and agents
- [x] Initial documentation structure
- [x] Project goals and statement of intent

---

## 🚧 In Progress (Q1 2026)

### Component Enrichment
- [ ] Add Storybook controls for all component variants
- [ ] Document real-world usage patterns for each component
- [ ] Add accessibility testing to all interactive components
- [ ] Create visual regression tests (Chromatic or Percy)

### Demo Content
- [ ] Restaurant menu example (schedule-based)
- [ ] Office directory example
- [ ] KPI dashboard example
- [ ] Event schedule example
- [ ] Retail promo rotation example

### Documentation
- [ ] Complete component API reference
- [x] Update shadcnui-signage README with full component list
- [x] Create comprehensive roadmap document
- [ ] Write "building your first signage screen" tutorial
- [ ] Document common patterns and anti-patterns
- [ ] Add troubleshooting guide

---

## 📋 Planned (Q2 2026)

### Component Library Expansion

#### New Behaviors
- [ ] **DataFetcher** - Periodic API polling with error handling and retry logic
- [ ] **WeatherWidget** - Weather display with icon mapping
- [ ] **QRCodeDisplay** - Generate and display QR codes with configurable sizes
- [ ] **ImageCarousel** - Image rotation with Ken Burns effect
- [ ] **VideoPlayer** - Simple video playback with loop control
- [ ] **ScrollingText** - Marquee/ticker for long text content

#### New Primitives
- [ ] **StatusBadge** - Color-coded status indicators
- [ ] **ProgressBar** - Visual progress indicator (determinate/indeterminate)
- [ ] **IconGrid** - Grid of icons with labels (wayfinding, services)
- [ ] **PriceTag** - Large price display with currency formatting

#### New Layouts
- [ ] **ThreeColumn** - Three-zone layout for menu boards
- [ ] **TopBottomSplit** - Header + footer with main content area
- [ ] **GridWithSidebar** - Content grid with persistent sidebar

### Testing & Quality
- [ ] Playwright E2E tests for critical user flows
- [ ] Performance benchmarks (render time, memory usage)
- [ ] Accessibility audit (WCAG AA compliance)
- [ ] Browser compatibility testing (BrightSign Chromium)

### Developer Experience
- [ ] Hot reload improvements for faster iteration
- [ ] Component generator CLI (`pnpm generate:component`)
- [ ] VS Code snippets for common signage patterns
- [ ] Better error messages and debugging guidance

---

## 🔮 Future (Q3 2026+)

### Platform Integration

#### BrightSign Specifics
- [ ] BrightSign device detection utilities
- [ ] Hardware-accelerated video playback examples
- [ ] GPIO interaction examples (button input, sensor data)
- [ ] Local storage patterns for offline-first data
- [ ] BrightSign MCP server enhancements (device control, diagnostics)

#### Content Management
- [ ] Contentful integration example
- [ ] Sanity integration example
- [ ] GraphQL API example
- [ ] Local JSON data patterns

### Advanced Features

#### Interactive Components
- [ ] Touch-enabled navigation patterns
- [ ] Gesture support (swipe, pinch)
- [ ] Keyboard navigation for interactive kiosks
- [ ] Voice control experiments (if hardware supports)

#### Data Visualization
- [ ] Real-time chart components (line, bar, pie)
- [ ] Animated number transitions
- [ ] Leaderboard component with sorting
- [ ] Heat map visualization

#### Typography & Accessibility
- [ ] Variable font support for better distance readability
- [ ] High-contrast mode
- [ ] Font size scaling presets (near/medium/far viewing)
- [ ] Multi-language support patterns

### Content Types

#### Industry-Specific Templates
- [ ] Restaurant menu templates (breakfast/lunch/dinner)
- [ ] Retail store templates (promotions, hours, services)
- [ ] Office templates (directory, calendar, announcements)
- [ ] Healthcare templates (wait times, wayfinding)
- [ ] Education templates (class schedules, events)

#### Generative Content
- [ ] AI-assisted content generation examples
- [ ] Dynamic layout optimization based on content length
- [ ] Automatic color palette generation from brand colors
- [ ] Smart image cropping and fitting

---

## 🎯 Long-Term Vision

### Ecosystem
- [ ] NPM package publication (`@thesignage/signage-components`)
- [ ] Standalone CLI for creating new signage projects
- [ ] Component marketplace/gallery
- [ ] Community-contributed components

### Tooling
- [ ] Visual editor for non-technical users
- [ ] Preview mode with device emulation
- [ ] Remote deployment and monitoring
- [ ] Analytics and usage tracking

### Research & Exploration
- [ ] Edge computing patterns (run React on edge workers)
- [ ] WebRTC for live video feeds
- [ ] WebGL for advanced graphics and animations
- [ ] WebAssembly for performance-critical features

---

## 🤝 Contributing

This roadmap is not set in stone. If you have suggestions, use cases, or want to contribute:

1. **Open an issue** to discuss new features or changes
2. **Submit a PR** for documentation improvements or bug fixes
3. **Share your signage screens** to inspire others

See [CONTRIBUTING.md](./docs/contributing/CONTRIBUTING.md) for guidelines.

---

## 📊 Versioning Strategy

The Sign Age follows semantic versioning:

- **v0.x** (Alpha): Breaking changes expected, API unstable
- **v1.0** (Beta): Core API stable, minor breaking changes possible
- **v2.0+** (Stable): Semantic versioning, deprecation warnings

**Target for v1.0:** Q3 2026 (pending component maturity and real-world validation)

---

## 📅 Milestone Tracking

| Milestone | Target | Status |
|-----------|--------|--------|
| Alpha Release (v0.1) | Q4 2025 | ✅ Complete |
| Component Enrichment | Q1 2026 | 🚧 In Progress |
| Documentation Complete | Q1 2026 | 🚧 In Progress |
| Demo Content Complete | Q2 2026 | 📋 Planned |
| Beta Release (v1.0-beta) | Q2 2026 | 📋 Planned |
| Stable Release (v1.0) | Q3 2026 | 🔮 Future |

---

**Last Updated:** February 8, 2026
