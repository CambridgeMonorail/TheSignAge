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
      {/* HERO / HEADER */}
      <header className="mb-12">
        <h1 className="text-4xl font-medium text-foreground">
          Component Libraries
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
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
          for installation and usage.
        </p>
      </header>

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
              Core shadcn/ui components organized by category. Standard web UI
              primitives for the demo website and general use.
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs mt-3">
              <pre>
                {`import { Button, Card, Input } from '@tsa/shadcnui';`}
              </pre>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-foreground mb-2">
              @tsa/shadcnui-signage
            </h3>
            <p className="mb-2 leading-relaxed text-muted-foreground">
              Signage-specific components built for distance readability,
              fixed-aspect layouts, and 24/7 operation on BrightSign devices.
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

      {/* STORYBOOK LINK */}
      <section className="bg-card p-6 rounded border border-border mb-12">
        <h2 className="text-2xl font-medium text-foreground mb-4">
          Documentation
        </h2>
        <p className="mb-4 text-muted-foreground">
          Browse Storybook for component documentation, props, and usage
          examples. Includes both shadcnui and shadcnui-signage libraries.
        </p>
        <Button onClick={handleStorybookClick} variant={'secondary'}>
          Open Storybook
        </Button>
      </section>

      {/* ADDITIONAL RESOURCES */}
      <section className="bg-card p-6 rounded border border-border mb-12">
        <h2 className="text-2xl font-medium text-foreground mb-4">Resources</h2>
        <p className="mb-4 text-muted-foreground">
          Additional documentation and project information:
        </p>
        <ul className="list-none space-y-2">
          <li>
            <Button onClick={handleGitHubClick} variant={'ghost'}>
              GitHub Repository
            </Button>
          </li>
          <li>
            <Button onClick={handleStorybookClick} variant={'ghost'}>
              Storybook Documentation
            </Button>
          </li>
          <li>
            <Button onClick={handleShadcnClick} variant={'ghost'}>
              shadcn/ui
            </Button>
          </li>
        </ul>
      </section>

      {/* CTA / FOOTER */}
      <section className="text-center">
        <h3 className="text-xl font-medium text-foreground mb-2">
          Component reference
        </h3>
        <p className="mb-4 text-muted-foreground">
          Browse Storybook for complete component documentation and usage
          examples.
        </p>
        <Button onClick={handleStorybookClick} variant={'secondary'}>
          View Documentation
        </Button>
      </section>
    </div>
  );
}
