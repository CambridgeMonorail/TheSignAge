import { FC, useState } from 'react';
import { Button } from '@tsa/shadcnui';
import { CodeSnippet } from '../../../components/CodeSnippet';
import { SignageTransition } from '@tsa/shadcnui-signage';

export const SignageTransitionDocPage: FC = () => {
  const [step, setStep] = useState(0);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-10 space-y-4">
        <p className="text-sm text-muted-foreground">Behaviour</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          SignageTransition
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
          Predictable, signage-safe transitions (crossfade or slide) with
          reduced-motion handling.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Installation</h2>
        <CodeSnippet
          language="bash"
          code={`npx shadcn@latest add https://cambridgemonorail.github.io/TheSignAge/registry/registry.json signage-transition`}
        />
        <p className="text-muted-foreground mt-4">
          Or{' '}
          <a
            href="https://github.com/CambridgeMonorail/TheSignAge/blob/main/libs/shadcnui-signage/src/lib/behaviour/SignageTransition.tsx"
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
        <div className="flex items-center gap-2 mb-4">
          <Button
            variant="secondary"
            onClick={() => setStep((s) => (s + 1) % 3)}
          >
            Next
          </Button>
        </div>
        <div className="border border-border rounded-lg p-6 min-h-[140px]">
          <SignageTransition type="crossfade" durationMs={280}>
            <div className="rounded-md border border-border p-6">
              <div className="text-sm text-muted-foreground">State</div>
              <div className="text-2xl font-medium">{step + 1}</div>
            </div>
          </SignageTransition>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Usage</h2>
        <CodeSnippet
          language="tsx"
          filename="RotatingPanel.tsx"
          code={`import { SignageTransition } from '@tsa/shadcnui-signage';

export function RotatingPanel({ children }: { children: React.ReactNode }) {
  return (
    <SignageTransition type="slide-left" durationMs={300}>
      {children}
    </SignageTransition>
  );
}`}
        />
      </section>
    </div>
  );
};
