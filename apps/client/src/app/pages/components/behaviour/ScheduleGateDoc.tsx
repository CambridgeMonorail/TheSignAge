import { FC, useMemo, useState } from 'react';
import { Button } from '@tsa/shadcnui';
import { CodeSnippet } from '../../../components/CodeSnippet';
import { ScheduleGate } from '@tsa/shadcnui-signage';

export const ScheduleGateDocPage: FC = () => {
  const [preset, setPreset] = useState<'open' | 'closed'>('open');

  const now = useMemo(() => {
    const epochMs =
      preset === 'open'
        ? new Date('2026-02-09T10:30:00').getTime()
        : new Date('2026-02-09T20:30:00').getTime();
    return () => epochMs;
  }, [preset]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-10 space-y-4">
        <p className="text-sm text-muted-foreground">Behaviour</p>
        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          ScheduleGate
        </h1>
        <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
          Conditionally renders content based on weekday and time windows
          (optionally timezone-aware).
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Installation</h2>
        <CodeSnippet
          language="bash"
          code={`npx shadcn@latest add https://cambridgemonorail.github.io/TheSignAge/registry/registry.json schedule-gate`}
        />
        <p className="text-muted-foreground mt-4">
          Or{' '}
          <a
            href="https://github.com/CambridgeMonorail/TheSignAge/blob/main/libs/shadcnui-signage/src/lib/behaviour/ScheduleGate.tsx"
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
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <Button
            variant={preset === 'open' ? 'secondary' : 'ghost'}
            onClick={() => setPreset('open')}
          >
            Simulate 10:30
          </Button>
          <Button
            variant={preset === 'closed' ? 'secondary' : 'ghost'}
            onClick={() => setPreset('closed')}
          >
            Simulate 20:30
          </Button>
        </div>

        <div className="border border-border rounded-lg p-6">
          <ScheduleGate
            now={now}
            windows={[{ days: ['mon'], start: '09:00', end: '17:00' }]}
            fallback={<div className="text-muted-foreground">Closed</div>}
          >
            <div className="text-2xl font-medium">Open</div>
          </ScheduleGate>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">Usage</h2>
        <CodeSnippet
          language="tsx"
          filename="Menu.tsx"
          code={`import { ScheduleGate } from '@tsa/shadcnui-signage';

export function DaypartMenu() {
  return (
    <ScheduleGate
      windows={[{ start: '06:00', end: '11:00', timezone: 'Europe/London' }]}
      fallback={<div>Not serving breakfast</div>}
    >
      <div>Breakfast menu</div>
    </ScheduleGate>
  );
}`}
        />
      </section>
    </div>
  );
};
