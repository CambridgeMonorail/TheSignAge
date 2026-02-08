import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@tsa/shadcnui';
import { BookOpen, Code, Layers, Terminal } from 'lucide-react';

/**
 * GettingStartedPage - Practical guide for developers to start using The Sign Age
 */
export const GettingStartedPage: FC = () => {
  const navigate = useNavigate();

  const handleStorybookClick = () => {
    window.open(
      'https://cambridgemonorail.github.io/TheSignAge/storybook/',
      '_blank',
      'noopener,noreferrer',
    );
  };

  const handleGitHubClick = () => {
    window.open(
      'https://github.com/CambridgeMonorail/TheSignAge',
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <div className="font-sans bg-background p-8 min-h-screen max-w-4xl mx-auto">
      {/* DOCS HEADER */}
      <div className="mb-10 space-y-4">
        <p className="text-sm text-muted-foreground">Documentation</p>

        <h1 className="text-3xl md:text-4xl font-medium tracking-tight">
          Getting Started
        </h1>

        <p className="max-w-2xl text-base md:text-lg text-muted-foreground">
          Build signage screens as real software. Deterministic,
          offline-capable, and designed for displays that live on walls.
        </p>
      </div>

      {/* WHAT YOU'LL NEED */}
      <section className="mb-12 bg-card p-6 rounded border border-border">
        <h2 className="text-2xl font-medium text-foreground mb-4 flex items-center gap-2">
          <Terminal className="w-6 h-6" />
          What You'll Need
        </h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Node.js 18+ and pnpm (or npm/yarn)</li>
          <li>React 18+ project (React 19 recommended)</li>
          <li>Tailwind CSS v4 configured in your project</li>
          <li>Basic familiarity with React components</li>
        </ul>
      </section>

      {/* INSTALLATION */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium text-foreground mb-4 flex items-center gap-2">
          <Code className="w-6 h-6" />
          Installation
        </h2>
        <p className="text-muted-foreground mb-4">
          The Sign Age is currently a monorepo for development and exploration.
          To use the components:
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Option 1: Clone and Reference Locally
            </h3>
            <div className="bg-slate-900 text-slate-100 p-4 rounded font-mono text-sm overflow-x-auto">
              <pre>
                {`# Clone the repository
git clone https://github.com/CambridgeMonorail/TheSignAge.git
cd TheSignAge

# Install dependencies
pnpm install

# Build the libraries
pnpm build:shadcnui
pnpm build:shadcnui-signage`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Option 2: Copy Components Directly
            </h3>
            <p className="text-muted-foreground mb-2">
              Browse{' '}
              <button
                onClick={handleGitHubClick}
                className="text-foreground hover:underline"
              >
                libs/shadcnui-signage
              </button>{' '}
              and copy the components you need into your project. All components
              are self-contained with minimal dependencies.
            </p>
          </div>
        </div>
      </section>

      {/* AI-ASSISTED DEVELOPMENT */}
      <section className="mb-12 bg-card p-6 rounded border border-border">
        <h2 className="text-2xl font-medium text-foreground mb-4 flex items-center gap-2">
          <Code className="w-6 h-6" />
          AI-Assisted Development
        </h2>
        <p className="text-muted-foreground mb-4">
          The Sign Age includes a custom GitHub Copilot agent optimized for
          building signage content. The{' '}
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded">
            signage-architect
          </code>{' '}
          agent understands signage-specific constraints and can generate
          production-ready components.
        </p>
        <div className="space-y-3">
          <div>
            <h3 className="font-medium text-foreground mb-2">What It Does</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>
                Builds signage components following the 10-foot legibility rule
              </li>
              <li>
                Enforces premium design standards (focal points, hierarchy,
                restraint)
              </li>
              <li>
                Generates layouts for menus, dashboards, wayfinding, and
                timetables
              </li>
              <li>
                Ensures 24/7 reliability (no memory leaks, handles
                offline/errors)
              </li>
              <li>
                Applies signage-specific heuristics (brevity, safe zones,
                viewing distance)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-foreground mb-2">How to Use It</h3>
            <p className="text-sm text-muted-foreground mb-2">
              In VS Code with GitHub Copilot Chat, invoke the agent:
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-xs">
              <pre>
                {`@signage-architect build a restaurant menu board
showing 3 categories with 4 items each, 1080p landscape`}
              </pre>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              The agent follows a clarification-first workflow and enforces
              design quality before generating code. See{' '}
              <button
                onClick={handleGitHubClick}
                className="text-foreground hover:underline"
              >
                .github/agents/signage-architect.agent.md
              </button>{' '}
              for full documentation.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK START */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium text-foreground mb-4 flex items-center gap-2">
          <Layers className="w-6 h-6" />
          Quick Start: Build Your First Signage Screen
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Step 1: Import Signage Components
            </h3>
            <div className="bg-slate-900 text-slate-100 p-4 rounded font-mono text-sm overflow-x-auto">
              <pre>
                {`import {
  SignageContainer,
  SignageHeader,
  MetricCard
} from '@tsa/shadcnui-signage';`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Step 2: Create a Dashboard Screen
            </h3>
            <div className="bg-slate-900 text-slate-100 p-4 rounded font-mono text-sm overflow-x-auto">
              <pre>
                {`export const MyDashboard = () => {
  return (
    <SignageContainer variant="emerald" showGrid={false}>
      <SignageHeader
        tag="Dashboard"
        tagVariant="emerald"
        title="Performance Metrics"
        subtitle="Real-time business analytics"
      />
      
      <div className="grid grid-cols-2 gap-8 mt-12">
        <MetricCard
          title="Revenue"
          value="$45,231"
          change="+12.5% vs yesterday"
          isPositive={true}
        />
        <MetricCard
          title="Active Users"
          value="1,847"
          change="+15.7% vs yesterday"
          isPositive={true}
        />
      </div>
    </SignageContainer>
  );
};`}
              </pre>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              Step 3: View Full-Screen
            </h3>
            <p className="text-muted-foreground">
              Signage screens are designed for full-screen display. Use a
              container with fixed aspect ratio (typically 16:9 or 9:16) and
              view at full-screen for the intended experience.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT LIBRARIES */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium text-foreground mb-4">
          Two Component Libraries
        </h2>

        <div className="space-y-4">
          <div className="bg-card p-6 rounded border border-border">
            <h3 className="text-lg font-medium text-foreground mb-2">
              @tsa/shadcnui
            </h3>
            <p className="text-muted-foreground mb-3">
              Core shadcn/ui components organized by category. Use these for
              standard web UI needs—buttons, forms, navigation, data display.
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-sm">
              <pre>
                {`import { Button, Card, Input } from '@tsa/shadcnui';`}
              </pre>
            </div>
          </div>

          <div className="bg-card p-6 rounded border border-border">
            <h3 className="text-lg font-medium text-foreground mb-2">
              @tsa/shadcnui-signage
            </h3>
            <p className="text-muted-foreground mb-3">
              Signage-specific components for distance-readable displays,
              fixed-aspect layouts, and 24/7 operation on BrightSign devices.
            </p>
            <div className="bg-slate-900 text-slate-100 p-3 rounded font-mono text-sm">
              <pre>
                {`import {
  SignageContainer,
  SignageHeader,
  MetricCard,
  EventCard,
  AnnouncementCard
} from '@tsa/shadcnui-signage';`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* KEY CONCEPTS */}
      <section className="mb-12">
        <h2 className="text-2xl font-medium text-foreground mb-4">
          Key Signage Concepts
        </h2>
        <div className="space-y-4">
          <div className="bg-card p-4 rounded border border-border">
            <h3 className="font-medium text-foreground mb-2">
              Fixed-Aspect Layouts
            </h3>
            <p className="text-sm text-muted-foreground">
              Signage screens run at known resolutions (1920×1080, 1080×1920).
              No responsive breakpoints—design for the exact screen size.
            </p>
          </div>
          <div className="bg-card p-4 rounded border border-border">
            <h3 className="font-medium text-foreground mb-2">
              Distance-Readable Typography
            </h3>
            <p className="text-sm text-muted-foreground">
              The 10-foot rule: Can it be read from 10 feet away? Use large text
              (24px minimum), high contrast, clear hierarchy.
            </p>
          </div>
          <div className="bg-card p-4 rounded border border-border">
            <h3 className="font-medium text-foreground mb-2">
              Deterministic Rendering
            </h3>
            <p className="text-sm text-muted-foreground">
              Signage runs 24/7 unattended. Avoid animations that accumulate
              state, ensure content updates predictably, handle offline
              gracefully.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="mb-12 bg-card p-6 rounded border border-border">
        <h2 className="text-2xl font-medium text-foreground mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          Next Steps
        </h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-foreground font-medium">1.</span>
            <p className="text-muted-foreground">
              Explore the{' '}
              <button
                onClick={() => navigate('/gallery')}
                className="text-foreground hover:underline"
              >
                Gallery
              </button>{' '}
              to see full-screen examples of signage layouts
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-foreground font-medium">2.</span>
            <p className="text-muted-foreground">
              Browse{' '}
              <button
                onClick={handleStorybookClick}
                className="text-foreground hover:underline"
              >
                Storybook
              </button>{' '}
              for complete component documentation and props
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-foreground font-medium">3.</span>
            <p className="text-muted-foreground">
              Check the{' '}
              <button
                onClick={handleGitHubClick}
                className="text-foreground hover:underline"
              >
                GitHub repository
              </button>{' '}
              for source code, examples, and contribution guidelines
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <div className="space-x-4">
          <Button onClick={() => navigate('/gallery')} variant="default">
            View Examples
          </Button>
          <Button onClick={handleStorybookClick} variant="secondary">
            Component Docs
          </Button>
        </div>
      </section>
    </div>
  );
};
