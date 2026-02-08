import { FC } from 'react';
import { CodeSnippet } from '../../../components/CodeSnippet';
import { Clock } from '@tsa/shadcnui-signage';

export const ClockDocPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-10 space-y-4">
        <p className="text-sm text-muted-foreground">Behaviour</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          Clock
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
          A signage-ready clock with large, readable formatting and optional
          timezone/locale.
        </p>
      </div>

      <section className="mb-12">
        {' '}
        <h2 className="text-2xl font-medium mb-4">Installation</h2>
        <CodeSnippet
          language="bash"
          code={`npx shadcn@latest add https://cambridgemonorail.github.io/TheSignAge/registry/registry.json clock`}
        />
        <p className="text-muted-foreground mt-4">
          Or{' '}
          <a
            href="https://github.com/CambridgeMonorail/TheSignAge/blob/main/libs/shadcnui-signage/src/lib/behaviour/Clock.tsx"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">Local time</div>
            <Clock className="text-5xl font-medium" format="HH:mm" />
          </div>
          <div className="border border-border rounded-lg p-6">
            <div className="text-sm text-muted-foreground mb-2">
              Timezone + seconds
            </div>
            <Clock
              className="text-5xl font-medium"
              format="HH:mm:ss"
              timezone="Europe/London"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Usage</h2>
        <CodeSnippet
          language="tsx"
          filename="Header.tsx"
          code={`import { Clock } from '@tsa/shadcnui-signage';

export function Header() {
  return <Clock format="HH:mm" className="text-6xl tabular-nums" />;
}`}
        />
      </section>
    </div>
  );
};
