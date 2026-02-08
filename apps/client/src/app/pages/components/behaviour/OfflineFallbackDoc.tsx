import { FC, useState } from 'react';
import { Button } from '@tsa/shadcnui';
import { CodeSnippet } from '../../../components/CodeSnippet';
import { OfflineFallback } from '@tsa/shadcnui-signage';

export const OfflineFallbackDocPage: FC = () => {
  const [isHealthy, setIsHealthy] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-10 space-y-4">
        <p className="text-sm text-muted-foreground">Behaviour</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          OfflineFallback
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
          A boundary that renders stable fallback content when offline (or when
          an app-provided health signal is false).
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Installation</h2>
        <CodeSnippet
          language="bash"
          code={`npx shadcn@latest add https://cambridgemonorail.github.io/TheSignAge/registry/registry.json offline-fallback`}
        />
        <p className="text-muted-foreground mt-4">
          Or{' '}
          <a
            href="https://github.com/CambridgeMonorail/TheSignAge/blob/main/libs/shadcnui-signage/src/lib/behaviour/OfflineFallback.tsx"
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
          <Button variant="secondary" onClick={() => setIsHealthy((v) => !v)}>
            Toggle health
          </Button>
          <div className="text-sm text-muted-foreground">
            isHealthy: {String(isHealthy)}
          </div>
        </div>

        <div className="border border-border rounded-lg p-6">
          <OfflineFallback
            isOnline={true}
            isHealthy={isHealthy}
            fallback={
              <div className="text-muted-foreground">
                Showing fallback (offline/unhealthy).
              </div>
            }
          >
            <div className="text-2xl font-medium">Showing live content</div>
          </OfflineFallback>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Usage</h2>
        <CodeSnippet
          language="tsx"
          filename="Screen.tsx"
          code={`import { OfflineFallback } from '@tsa/shadcnui-signage';

export function Screen({ isHealthy }: { isHealthy: boolean }) {
  return (
    <OfflineFallback
      isHealthy={isHealthy}
      fallback={<div>Offline / unhealthy</div>}
    >
      <div>Live content</div>
    </OfflineFallback>
  );
}`}
        />
      </section>
    </div>
  );
};
