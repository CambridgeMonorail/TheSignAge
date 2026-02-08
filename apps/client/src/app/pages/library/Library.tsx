import { Button } from '@tsa/shadcnui';
import imageSrc from '../../../assets/images/shad-samples.svg';

/**
 * LibraryPage component
 */
export function LibraryPage() {
  const handleGitHubClick = () => {
    window.open(
      'https://github.com/CambridgeMonorail/TheSignAge',
      '_blank',
      'noopener,noreferrer',
    );
  };

  const handleStorybookClick = () => {
    window.open(
      'https://cambridgemonorail.github.io/TheSignAge/storybook/?path=/docs/introduction--documentation',
      '_blank',
      'noopener,noreferrer',
    );
  };

  const handleShadcnClick = () => {
    window.open('https://ui.shadcn.com', '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="font-sans bg-background p-8 min-h-screen">
      {/* DOCS HEADER */}
      <div className="mb-10 space-y-4">
        <p className="text-sm text-muted-foreground">Documentation</p>

        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          Component Libraries
        </h1>

        <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
          React components for digital signage and web interfaces. Built with{' '}
          <button
            onClick={handleShadcnClick}
            className="text-foreground hover:underline"
          >
            shadcn/ui
          </button>
          , React 19, and Tailwind v4. See{' '}
          <button
            onClick={() => (window.location.href = '/getting-started')}
            className="text-foreground hover:underline"
          >
            Getting Started
          </button>{' '}
          for installation.
        </p>
      </div>

      {/* LIBRARY OVERVIEW */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-medium text-foreground mb-4">
            Two Libraries
          </h2>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-foreground mb-2">
              @tsa/shadcnui
            </h3>
            <p className="mb-2 leading-relaxed text-muted-foreground">
              Our copy of shadcn/ui components, organized by category and
              packaged as a library for reuse across the monorepo. Standard web
              UI primitives used as building blocks for the demo website and
              other apps.
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs mt-3">
              <pre>
                {`import { Button, Card, Input } from '@tsa/shadcnui';`}
              </pre>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-foreground mb-2">
              @tsa/shadcnui-signage ⭐
            </h3>
            <p className="mb-2 leading-relaxed text-muted-foreground">
              Signage-specific components built for distance readability,
              fixed-aspect layouts, and 24/7 operation on BrightSign devices.
              <strong className="text-foreground">
                {' '}
                Supports shadcn registry protocol for native installation.
              </strong>
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs mt-3">
              <pre>
                {`import {
  SignageContainer,
  SignageHeader,
  MetricCard,
  EventCard
} from '@tsa/shadcnui-signage';`}
              </pre>
            </div>
          </div>
          <ul className="list-disc list-inside mb-4 space-y-1 text-muted-foreground">
            <li>Distance-readable typography (10-foot rule)</li>
            <li>Fixed-aspect primitives, layouts, and blocks</li>
            <li>Deterministic rendering for known resolutions</li>
            <li>Designed for always-on, unattended displays</li>
          </ul>
          <Button onClick={handleGitHubClick} variant={'secondary'}>
            View on GitHub
          </Button>
        </div>

        {/* SCREENSHOT / IMAGE SECTION */}
        <div className="flex justify-center items-center">
          <div className="relative w-[350px] h-[200px] bg-muted flex items-center justify-center rounded border border-border overflow-hidden">
            <img src={imageSrc} alt="Component library preview" />
            <span className="absolute inset-0 bg-background/80 text-foreground flex items-center justify-center text-sm">
              Component Preview
            </span>
          </div>
        </div>
      </section>

      {/* REGISTRY SUPPORT */}
      <section className="bg-card p-6 rounded border border-border mb-12">
        <h2 className="text-2xl font-medium text-foreground mb-4">
          shadcn Registry Support: What It Means
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            The Sign Age signage components support the{' '}
            <strong className="text-foreground">
              shadcn registry protocol
            </strong>{' '}
            — a distribution format for components that experienced frontend
            developers already know.
          </p>
          <p>
            <strong className="text-foreground">
              This is not an app store.
            </strong>{' '}
            Components are <em>copied</em> into your codebase, not installed as
            a versioned dependency. You own the code. You can modify it. No
            lock-in.
          </p>
          <div className="bg-slate-900 text-slate-100 p-4 rounded font-mono text-sm">
            <pre>
              {`# Install a single signage component
npx shadcn@latest add \\
  https://cambridgemonorail.github.io/TheSignAge/registry/registry.json \\
  clock

# Install multiple components
npx shadcn@latest add \\
  https://cambridgemonorail.github.io/TheSignAge/registry/registry.json \\
  metric-card event-card schedule-gate`}
            </pre>
          </div>
          <p>
            <strong className="text-foreground">Why this matters:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong className="text-foreground">
                Native developer workflow
              </strong>{' '}
              - Install components the same way you install shadcn primitives.
              No copy-paste guesswork.
            </li>
            <li>
              <strong className="text-foreground">
                Machine-readable structure
              </strong>{' '}
              - AI coding tools (VS Code agents, GitHub Copilot) can install
              components correctly, including all dependencies.
            </li>
            <li>
              <strong className="text-foreground">
                You stay in control
              </strong>{' '}
              - Updates are opt-in. No breaking changes to your build. Fast
              iteration without semver forever.
            </li>
            <li>
              <strong className="text-foreground">
                Built for modification
              </strong>{' '}
              - These are building blocks, not black boxes. Install, adapt, own.
            </li>
          </ul>
          <p className="text-sm italic">
            Registry support means The Sign Age components feel like software,
            not a demo site with copy buttons.
          </p>
        </div>
      </section>

      {/* STORYBOOK LINK */}
      <section className="bg-card p-6 rounded border border-border mb-12">
        <h2 className="text-2xl font-medium text-foreground mb-4">
          Interactive Documentation
        </h2>
        <p className="mb-4 text-muted-foreground">
          Browse Storybook for live component previews, props documentation,
          and usage examples. All components include interactive controls and
          real-world scenarios.
        </p>
        <Button onClick={handleStorybookClick} variant={'secondary'}>
          Open Storybook
        </Button>
      </section>

      {/* ADDITIONAL RESOURCES */}
      <section className="bg-card p-6 rounded border border-border mb-12">
        <h2 className="text-2xl font-medium text-foreground mb-4">
          Additional Resources
        </h2>
        <p className="mb-4 text-muted-foreground">
          Deep dive into component architecture, deployment patterns, and
          real-world examples:
        </p>
        <ul className="list-none space-y-2">
          <li>
            <Button
              onClick={() =>
                window.open(
                  'https://github.com/CambridgeMonorail/TheSignAge/blob/main/libs/shadcnui-signage/README.md',
                  '_blank',
                  'noopener,noreferrer',
                )
              }
              variant={'ghost'}
            >
              Component Library README
            </Button>
          </li>
          <li>
            <Button
              onClick={() =>
                window.open(
                  'https://github.com/CambridgeMonorail/TheSignAge/blob/main/ROADMAP.md',
                  '_blank',
                  'noopener,noreferrer',
                )
              }
              variant={'ghost'}
            >
              Project Roadmap
            </Button>
          </li>
          <li>
            <Button onClick={handleGitHubClick} variant={'ghost'}>
              GitHub Repository
            </Button>
          </li>
          <li>
            <Button onClick={handleShadcnClick} variant={'ghost'}>
              shadcn/ui Official Site
            </Button>
          </li>
        </ul>
      </section>

      {/* CTA / FOOTER */}
      <section className="text-center">
        <h3 className="text-xl font-medium text-foreground mb-2">
          Ready to build signage screens?
        </h3>
        <p className="mb-4 text-muted-foreground">
          See Getting Started for installation instructions and your first
          deployment.
        </p>
        <div className="flex gap-3 justify-center">
          <Button
            onClick={() => (window.location.href = '/getting-started')}
            variant={'default'}
          >
            Get Started
          </Button>
          <Button onClick={handleStorybookClick} variant={'secondary'}>
            Browse Components
          </Button>
        </div>
      </section>
    </div>
  );
}
