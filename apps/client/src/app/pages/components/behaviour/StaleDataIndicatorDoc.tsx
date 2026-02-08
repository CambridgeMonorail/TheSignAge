import { FC } from 'react';
import { CodeSnippet } from '../../../components/CodeSnippet';
import { StaleDataIndicator } from '@tsa/shadcnui-signage';

export const StaleDataIndicatorDocPage: FC = () => {
  const nowMs = new Date('2026-02-09T12:00:00Z').getTime();
  const now = () => nowMs;

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-10 space-y-4">
        <p className="text-sm text-muted-foreground">Behaviour</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          StaleDataIndicator
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
          A compact freshness indicator for always-on screens (fresh / warning /
          stale) based on last update time.
        </p>
      </div>

      <section className="mb-12">
        {' '}
        <h2 className="text-2xl font-medium mb-4">Installation</h2>
        <CodeSnippet
          language="bash"
          code={`npx shadcn@latest add https://cambridgemonorail.github.io/TheSignAge/registry/registry.json stale-data-indicator`}
        />
        <p className="text-muted-foreground mt-4">
          Or{' '}
          <a
            href="https://github.com/CambridgeMonorail/TheSignAge/blob/main/libs/shadcnui-signage/src/lib/behaviour/StaleDataIndicator.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline"
          >
            view source on GitHub
          </a>
          .
        </p>
      </section>

      <section className="mb-12">
        {' '}
        <h2 className="text-2xl font-medium mb-4">Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">Fresh</div>
            <StaleDataIndicator now={now} lastUpdatedEpochMs={nowMs - 30_000} />
          </div>
          <div className="border border-border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">Warning</div>
            <StaleDataIndicator
              now={now}
              lastUpdatedEpochMs={nowMs - 8 * 60_000}
            />
          </div>
          <div className="border border-border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">Stale</div>
            <StaleDataIndicator
              now={now}
              lastUpdatedEpochMs={nowMs - 25 * 60_000}
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Usage</h2>
        <CodeSnippet
          language="tsx"
          filename="Status.tsx"
          code={`import { StaleDataIndicator } from '@tsa/shadcnui-signage';

export function Status({ lastUpdatedEpochMs }: { lastUpdatedEpochMs: number }) {
  return (
    <StaleDataIndicator
      lastUpdatedEpochMs={lastUpdatedEpochMs}
      warnAfterMin={5}
      staleAfterMin={15}
    />
  );
}`}
        />
      </section>
    </div>
  );
};
