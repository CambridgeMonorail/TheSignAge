# Requirements

## shadcn-based Signage Components Demo and Documentation Site

### Status

Best and final

### Audience

Internal developers working on the signage component library and associated demo/docs site.

---

## 1. Purpose

Transform our existing GitHub Pages demo into a **developer-first documentation site** for our signage components.

The site should feel familiar to anyone who has used shadcn/ui:

* Component-centric
* Source-first
* Easy to copy, install, and adapt
* Explicit about composition and dependencies

This is documentation as infrastructure, not marketing.

---

## 2. Scope

This work applies **only** to public components exported from:

```
libs/shadcnui-signage
```

It does **not** apply to:

* other libraries in the monorepo
* internal utilities or hooks
* base shadcn components
* experimental or private components

If a component is not part of `libs/shadcnui-signage`, it is explicitly out of scope.

---

## 3. Design Principles

* **Source-first**
  Components are copied or installed as source, not consumed as black boxes.

* **Composition over abstraction**
  We extend and compose shadcn components. We do not replace them.

* **Transparency**
  Developers should always know:

  * what code they are getting
  * what shadcn primitives it is built on
  * what behaviour we add or restrict

* **Signage realism**
  Examples and guidance must reflect long-running, fixed-display constraints.

---

## 4. Target Developer Experience

A frontend developer should be able to:

1. Browse a list of signage components
2. Click a component and immediately understand:

   * what problem it solves on signage
   * which shadcn primitives it builds on
   * how to install or copy it
3. Copy a working example without hunting through Storybook
4. Use Storybook only when they want prop-level detail

---

## 5. Inventory Requirement

As an initial task, the developer must:

1. Produce a definitive list of **public components exported from**:

   ```
   libs/shadcnui-signage
   ```
2. Treat this list as the authoritative source for:

   * documentation pages
   * navigation
   * coverage checks

No components outside this list should appear in the docs.

---

## 6. Component Documentation Pages

Each signage component in `libs/shadcnui-signage` must have its own page.

### Required sections (in order)

---

### 6.1 Overview

* Component name
* One-sentence description
* Clear statement that this component is designed for signage use

---

### 6.2 Built On (Mandatory)

This section is **required for every signage component**.

It must explicitly list the shadcn primitives the component is built from.

Example:

> **Built on**
>
> * `Card` (shadcn/ui)
> * `ScrollArea` (shadcn/ui)
> * `useInterval` (local signage hook)

Include short explanations:

* why each primitive was chosen
* what behaviour we constrain, extend, or disable for signage

This section exists to avoid “mystery abstractions”.

---

### 6.3 Live Examples

* Rendered examples directly on the page
* Examples must reflect real signage usage:

  * fixed aspect ratios
  * large typography
  * time-based or data-driven behaviour
* Avoid toy or purely aesthetic examples

---

### 6.4 Usage Snippets (Copyable)

Use a shared `CodeSnippet` component.

Each page must include:

* a basic usage example
* a recommended signage usage example

Snippets must:

* be valid TSX
* be formatted and copy-paste safe
* reflect the actual exported API

---

### 6.5 Installation

One clear path must be provided.

#### Option A: shadcn Registry Install (preferred)

```bash
npx shadcn@latest add <registry-url>/component.json
```

Include:

* required shadcn primitives
* any Tailwind assumptions
* any peer dependencies

#### Option B: Copy Source

* link to the exact source file in GitHub
* note any files that must be copied together

---

### 6.6 Behaviour and Signage Notes

Short, human-written notes covering:

* timing
* state
* performance
* long-running behaviour
* any signage-specific defaults or constraints

Do not auto-dump types at this stage.

---

### 6.7 Links

* View in Storybook (deep link to the specific story)
* View source on GitHub
* Related signage components (optional)

---

## 7. Snippet Infrastructure

Implement a reusable `CodeSnippet` component with:

* syntax highlighting
* copy-to-clipboard
* optional filename label
* optional tabbed snippets (usage / install)

Constraints:

* must work in a static GitHub Pages build
* no Node-only runtime dependencies

---

## 8. Navigation and Discovery

The docs site must provide:

* a component index (list or grid)
* search by:

  * component name
  * signage-related tags (layout, data, motion, time, media)
* clear navigation between:

  * Components
  * Patterns
  * Getting Started
  * Storybook

A developer should be able to find a component in under 10 seconds.

---

## 9. Storybook Integration

Storybook remains useful, but secondary.

Requirements:

* Storybook stays deployed at its existing sub-path
* Each component page links directly to its Storybook story
* Understanding a component must not require Storybook

---

## 10. GitHub Pages Constraints

The solution must be designed for static hosting.

Requirements:

* correct base path handling
* SPA routing support (hash routing or 404 redirect strategy)
* assets resolve correctly for:

  * the docs site
  * the Storybook subdirectory

Deep links must work when opened in a new tab.

---

## 11. Getting Started Content

Include a minimal but clear onboarding section explaining:

* what this library is
* how it relates to shadcn/ui
* why signage is different from “web in a browser”
* long-running and offline considerations

---

## 12. Patterns Section

Create an initial set of signage-specific patterns, for example:

* long-running data ticker
* clock and schedule-driven UI
* resilient fixed-layout screens

Each pattern should reference the signage components it uses.

---

## 13. Technical Structure

Two acceptable approaches:

### Option A

Evolve the existing demo site into a docs-first structure.

### Option B (preferred)

Create a dedicated `docs` app in Nx:

* cleaner information architecture
* fewer GitHub Pages routing compromises
* demo site can remain exploratory

The developer should recommend one approach with rationale.

---

## 14. Definition of Done

This work is complete when:

* every public component in `libs/shadcnui-signage` has its own documentation page
* every page includes a clear **Built On** section listing shadcn primitives
* copyable snippets work
* Storybook links are present but optional
* the site works fully on GitHub Pages, including deep links
* the docs clearly communicate that this is:
  **a signage-focused extension of shadcn/ui, not a parallel design system**


