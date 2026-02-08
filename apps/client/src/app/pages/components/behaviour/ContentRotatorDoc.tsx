import { FC } from 'react';
import { CodeSnippet } from '../../../components/CodeSnippet';
import { ContentRotator } from '@tsa/shadcnui-signage';

export const ContentRotatorDocPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-10 space-y-4">
        <p className="text-sm text-muted-foreground">Behaviour</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          ContentRotator
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
          Rotates between multiple pieces of content on a fixed cadence, with
          optional transitions and pause controls.
        </p>
      </div>

      <section className="mb-12">
        {' '}
        <h2 className="text-2xl font-medium mb-4">Installation</h2>
        <CodeSnippet
          language="bash"
          code={`npx shadcn@latest add https://cambridgemonorail.github.io/TheSignAge/registry/registry.json content-rotator`}
        />
        <p className="text-muted-foreground mt-4">
          Or{' '}
          <a
            href="https://github.com/CambridgeMonorail/TheSignAge/blob/main/libs/shadcnui-signage/src/lib/behaviour/ContentRotator.tsx"
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
        <div className="border border-border rounded-lg p-6">
          <ContentRotator intervalMs={2500} transition="slide">
            <div className="rounded-md border border-border p-6">
              <div className="text-sm text-muted-foreground">Slide</div>
              <div className="text-2xl font-medium">Welcome</div>
            </div>
            <div className="rounded-md border border-border p-6">
              <div className="text-sm text-muted-foreground">Slide</div>
              <div className="text-2xl font-medium">Today’s Events</div>
            </div>
            <div className="rounded-md border border-border p-6">
              <div className="text-sm text-muted-foreground">Slide</div>
              <div className="text-2xl font-medium">Safety Notice</div>
            </div>
          </ContentRotator>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Usage</h2>
        <CodeSnippet
          language="tsx"
          filename="LobbyLoop.tsx"
          code={`import { ContentRotator } from '@tsa/shadcnui-signage';

export function LobbyLoop() {
  return (
    <ContentRotator intervalMs={8000} transition="slide">
      <div>Slide A</div>
      <div>Slide B</div>
      <div>Slide C</div>
    </ContentRotator>
  );
}`}
        />
      </section>
    </div>
  );
};
