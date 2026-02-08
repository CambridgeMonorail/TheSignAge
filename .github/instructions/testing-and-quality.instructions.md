---
name: 'Testing and Quality Standards'
description: 'Test frameworks, patterns, and validation workflows'
applyTo: '**/*.test.{ts,tsx}, **/*.spec.{ts,tsx}, **/playwright/**/*.{ts,tsx}'
---

# Testing and Quality Standards

## Test Frameworks by Project

- **Vitest:** All projects
  - Configuration: `vitest.workspace.ts`
  - Run: `pnpm test:<project>`
- **Playwright:** E2E tests for `client` app
  - Tests in `apps/client-e2e/`
  - Run: `pnpm test:client:e2e`
- **Storybook:** Component visual testing
  - Stories in `libs/storybook-host/`
  - Run: `pnpm serve:storybook`

## Preferred Testing Patterns

- **Unit tests:** Test individual functions and components in isolation
- **Integration tests:** Test component interactions and data flow
- **E2E tests:** Test critical user flows end-to-end
- Use `@testing-library/react` for component tests
- Use `@testing-library/user-event` for simulating user interactions
- Mock external dependencies (APIs, services)
- Keep tests fast and focused

## Validation Commands

Before commit, run:

```bash
pnpm verify  # Runs format, lint, type-check, test, build
```

For faster feedback on single project:
- `pnpm type-check:<project>`
- `pnpm lint:<project>`
- `pnpm test:<project>`

For multiple affected projects:
- `pnpm type-check:affected`
- `pnpm lint:affected`
- `pnpm test:affected`

## Do NOT

- Don't invent new scripts (use existing `pnpm` commands from `package.json`)
- Don't skip tests for new features or bug fixes
- Don't commit code that fails validation
- Don't guess which projects are affected (use `pnpm run <command>:affected`)