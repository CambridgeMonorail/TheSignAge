import { FC, useMemo } from 'react';
import { CodeSnippet } from '../../../components/CodeSnippet';
import { Countdown } from '@tsa/shadcnui-signage';

export const CountdownDocPage: FC = () => {
  const targetEpochMs = useMemo(() => Date.now() + 90_000, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-10 space-y-4">
        <p className="text-sm text-muted-foreground">Behaviour</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          Countdown
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
          Counts down to a target epoch time and clamps at 0. Optionally calls a
          completion callback.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Installation</h2>
        <CodeSnippet
          language="bash"
          code={`npx shadcn@latest add https://cambridgemonorail.github.io/TheSignAge/registry/registry.json countdown`}
        />
        <p className="text-muted-foreground mt-4">
          Or{' '}
          <a
            href="https://github.com/CambridgeMonorail/TheSignAge/blob/main/libs/shadcnui-signage/src/lib/behaviour/Countdown.tsx"
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
        <h2 className="text-2xl font-medium mb-4">Example</h2>
        <div className="border border-border rounded-lg p-6">
          <div className="text-sm text-muted-foreground mb-2">
            Next update in
          </div>
          <Countdown
            targetEpochMs={targetEpochMs}
            format="mm:ss"
            className="text-6xl font-medium tabular-nums"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Usage</h2>
        <CodeSnippet
          language="tsx"
          filename="Timer.tsx"
          code={`import { Countdown } from '@tsa/shadcnui-signage';

export function Timer({ targetEpochMs }: { targetEpochMs: number }) {
  return (
    <Countdown
      targetEpochMs={targetEpochMs}
      format="mm:ss"
      className="text-7xl tabular-nums"
    />
  );
}`}
        />
      </section>
    </div>
  );
};
