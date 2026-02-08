import type { Meta, StoryObj } from '@storybook/react';
import { SignageContainer } from './SignageContainer';
import { SignageHeader } from './SignageHeader';

const meta: Meta<typeof SignageContainer> = {
  title: 'Signage/Layouts/SignageContainer',
  component: SignageContainer,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'emerald',
        'teal',
        'blue',
        'violet',
        'indigo',
        'pink',
        'orange',
        'cyan',
      ],
      description: 'Color theme variant',
    },
    showGrid: {
      control: 'boolean',
      description: 'Whether to show grid overlay',
    },
    showAmbientOrbs: {
      control: 'boolean',
      description: 'Whether to show ambient orb effects',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SignageContainer>;

/**
 * Emerald variant with all effects
 */
export const Emerald: Story = {
  args: {
    variant: 'emerald',
    showGrid: true,
    showAmbientOrbs: true,
    children: (
      <div className="h-screen flex items-center justify-center">
        <SignageHeader
          tag="Live Now"
          tagVariant="emerald"
          title="Welcome"
          subtitle="Emerald variant with ambient effects"
        />
      </div>
    ),
  },
};

/**
 * Teal variant
 */
export const Teal: Story = {
  args: {
    variant: 'teal',
    showGrid: true,
    showAmbientOrbs: true,
    children: (
      <div className="h-screen flex items-center justify-center">
        <SignageHeader
          tag="Updated"
          tagVariant="teal"
          title="Dashboard"
          subtitle="Teal variant with gradient effects"
        />
      </div>
    ),
  },
};

/**
 * Blue variant (default)
 */
export const Blue: Story = {
  args: {
    variant: 'blue',
    showGrid: true,
    showAmbientOrbs: true,
    children: (
      <div className="h-screen flex items-center justify-center">
        <SignageHeader
          tag="Today"
          tagVariant="blue"
          title="Welcome"
          subtitle="Blue variant with ambient orbs"
        />
      </div>
    ),
  },
};

/**
 * Violet variant
 */
export const Violet: Story = {
  args: {
    variant: 'violet',
    showGrid: true,
    showAmbientOrbs: true,
    children: (
      <div className="h-screen flex items-center justify-center">
        <SignageHeader
          tag="Featured"
          tagVariant="violet"
          title="Employee Spotlight"
          subtitle="Violet variant with elegant gradients"
        />
      </div>
    ),
  },
};

/**
 * Indigo variant with vibrant gradients
 */
export const Indigo: Story = {
  args: {
    variant: 'indigo',
    showGrid: true,
    showAmbientOrbs: true,
    children: (
      <div className="h-screen flex items-center justify-center">
        <SignageHeader
          tag="Special Event"
          tagVariant="violet"
          title="Conference 2026"
          subtitle="Indigo to pink gradient variant"
        />
      </div>
    ),
  },
};

/**
 * Pink variant
 */
export const Pink: Story = {
  args: {
    variant: 'pink',
    showGrid: true,
    showAmbientOrbs: true,
    children: (
      <div className="h-screen flex items-center justify-center">
        <SignageHeader
          tag="Celebration"
          tagVariant="pink"
          title="Anniversary Party"
          subtitle="Pink gradient variant"
        />
      </div>
    ),
  },
};

/**
 * Orange variant
 */
export const Orange: Story = {
  args: {
    variant: 'orange',
    showGrid: true,
    showAmbientOrbs: true,
    children: (
      <div className="h-screen flex items-center justify-center">
        <SignageHeader
          tag="Alert"
          tagVariant="orange"
          title="Important Update"
          subtitle="Orange variant for attention"
        />
      </div>
    ),
  },
};

/**
 * Cyan variant
 */
export const Cyan: Story = {
  args: {
    variant: 'cyan',
    showGrid: true,
    showAmbientOrbs: true,
    children: (
      <div className="h-screen flex items-center justify-center">
        <SignageHeader
          tag="Tech"
          tagVariant="teal"
          title="Innovation Hub"
          subtitle="Cyan variant with modern feel"
        />
      </div>
    ),
  },
};

/**
 * Without grid overlay
 */
export const NoGrid: Story = {
  args: {
    variant: 'blue',
    showGrid: false,
    showAmbientOrbs: true,
    children: (
      <div className="h-screen flex items-center justify-center">
        <SignageHeader
          title="Clean Layout"
          subtitle="Container without grid overlay"
        />
      </div>
    ),
  },
};

/**
 * Without ambient orbs
 */
export const NoAmbientOrbs: Story = {
  args: {
    variant: 'violet',
    showGrid: true,
    showAmbientOrbs: false,
    children: (
      <div className="h-screen flex items-center justify-center">
        <SignageHeader
          title="Minimal Effects"
          subtitle="Container without ambient orb effects"
        />
      </div>
    ),
  },
};

/**
 * Plain container (no effects)
 */
export const Plain: Story = {
  args: {
    variant: 'blue',
    showGrid: false,
    showAmbientOrbs: false,
    children: (
      <div className="h-screen flex items-center justify-center">
        <SignageHeader
          title="Plain Container"
          subtitle="No grid or ambient effects"
        />
      </div>
    ),
  },
};

/**
 * With complex content
 */
export const WithContent: Story = {
  args: {
    variant: 'emerald',
    showGrid: true,
    showAmbientOrbs: true,
    children: (
      <div className="h-screen flex flex-col items-center justify-center gap-12 p-16">
        <SignageHeader
          tag="Live"
          tagVariant="emerald"
          title="KPI Dashboard"
          subtitle="Real-time performance metrics"
        />
        <div className="grid grid-cols-3 gap-8 w-full max-w-6xl">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-6xl font-bold text-white mb-2">$1.2M</div>
            <div className="text-xl text-slate-400">Revenue</div>
            <div className="text-emerald-400 text-lg mt-2">+12.5%</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-6xl font-bold text-white mb-2">8,432</div>
            <div className="text-xl text-slate-400">Users</div>
            <div className="text-red-400 text-lg mt-2">-3.2%</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="text-6xl font-bold text-white mb-2">24.8%</div>
            <div className="text-xl text-slate-400">Conversion</div>
            <div className="text-emerald-400 text-lg mt-2">+8.4%</div>
          </div>
        </div>
      </div>
    ),
  },
};
