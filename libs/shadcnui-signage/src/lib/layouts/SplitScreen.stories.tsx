import type { Meta, StoryObj } from '@storybook/react';
import { SplitScreen } from './SplitScreen';
import { ScreenFrame } from '../primitives/ScreenFrame';

const meta: Meta<typeof SplitScreen> = {
  title: 'Signage/Layouts/SplitScreen',
  component: SplitScreen,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['row', 'column'],
      description: 'Layout direction',
    },
    ratio: {
      control: 'select',
      options: ['50-50', '60-40', '70-30', '80-20'],
      description: 'Split ratio between zones',
    },
    gap: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
      description: 'Gap size between zones',
    },
  },
  decorators: [
    (Story) => (
      <ScreenFrame resolution="1080p" scale={0.4}>
        <Story />
      </ScreenFrame>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SplitScreen>;

/**
 * Default 70-30 horizontal split
 */
export const Default: Story = {
  args: {
    direction: 'row',
    ratio: '70-30',
    gap: 'md',
    primary: (
      <div className="flex h-full items-center justify-center bg-blue-500 text-white">
        <div className="text-center">
          <h2 className="text-6xl font-bold">Primary Zone</h2>
          <p className="mt-4 text-2xl">70% Width</p>
        </div>
      </div>
    ),
    secondary: (
      <div className="flex h-full items-center justify-center bg-purple-500 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Secondary</h2>
          <p className="mt-2 text-xl">30% Width</p>
        </div>
      </div>
    ),
  },
};

/**
 * Equal 50-50 split
 */
export const Ratio5050: Story = {
  args: {
    direction: 'row',
    ratio: '50-50',
    gap: 'md',
    primary: (
      <div className="flex h-full items-center justify-center bg-green-500 text-white">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Primary</h2>
          <p className="mt-3 text-2xl">50%</p>
        </div>
      </div>
    ),
    secondary: (
      <div className="flex h-full items-center justify-center bg-teal-500 text-white">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Secondary</h2>
          <p className="mt-3 text-2xl">50%</p>
        </div>
      </div>
    ),
  },
};

/**
 * 60-40 ratio split
 */
export const Ratio6040: Story = {
  args: {
    direction: 'row',
    ratio: '60-40',
    gap: 'md',
    primary: (
      <div className="flex h-full items-center justify-center bg-orange-500 text-white">
        <div className="text-center">
          <h2 className="text-6xl font-bold">Primary</h2>
          <p className="mt-3 text-2xl">60%</p>
        </div>
      </div>
    ),
    secondary: (
      <div className="flex h-full items-center justify-center bg-red-500 text-white">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Secondary</h2>
          <p className="mt-3 text-xl">40%</p>
        </div>
      </div>
    ),
  },
};

/**
 * 80-20 ratio for prominent primary content
 */
export const Ratio8020: Story = {
  args: {
    direction: 'row',
    ratio: '80-20',
    gap: 'md',
    primary: (
      <div className="flex h-full items-center justify-center bg-indigo-500 text-white">
        <div className="text-center">
          <h2 className="text-7xl font-bold">Main Content</h2>
          <p className="mt-4 text-2xl">80% Width</p>
        </div>
      </div>
    ),
    secondary: (
      <div className="flex h-full items-center justify-center bg-pink-500 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Side</h2>
          <p className="mt-2 text-lg">20%</p>
        </div>
      </div>
    ),
  },
};

/**
 * Vertical column layout
 */
export const ColumnDirection: Story = {
  args: {
    direction: 'column',
    ratio: '70-30',
    gap: 'md',
    primary: (
      <div className="flex h-full items-center justify-center bg-cyan-500 text-white">
        <div className="text-center">
          <h2 className="text-6xl font-bold">Top Section</h2>
          <p className="mt-3 text-2xl">70% Height</p>
        </div>
      </div>
    ),
    secondary: (
      <div className="flex h-full items-center justify-center bg-blue-700 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Bottom Section</h2>
          <p className="mt-2 text-xl">30% Height</p>
        </div>
      </div>
    ),
  },
};

/**
 * No gap between zones
 */
export const NoGap: Story = {
  args: {
    direction: 'row',
    ratio: '70-30',
    gap: 'none',
    primary: (
      <div className="flex h-full items-center justify-center bg-violet-500 text-white">
        <div className="text-center">
          <h2 className="text-6xl font-bold">No Gap</h2>
          <p className="mt-3 text-2xl">Seamless Layout</p>
        </div>
      </div>
    ),
    secondary: (
      <div className="flex h-full items-center justify-center bg-fuchsia-500 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Adjacent</h2>
        </div>
      </div>
    ),
  },
};

/**
 * Small gap between zones
 */
export const SmallGap: Story = {
  args: {
    direction: 'row',
    ratio: '70-30',
    gap: 'sm',
    primary: (
      <div className="flex h-full items-center justify-center bg-emerald-500 text-white">
        <div className="text-center">
          <h2 className="text-6xl font-bold">Small Gap</h2>
          <p className="mt-3 text-2xl">16px spacing</p>
        </div>
      </div>
    ),
    secondary: (
      <div className="flex h-full items-center justify-center bg-lime-500 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Compact</h2>
        </div>
      </div>
    ),
  },
};

/**
 * Large gap between zones
 */
export const LargeGap: Story = {
  args: {
    direction: 'row',
    ratio: '70-30',
    gap: 'lg',
    primary: (
      <div className="flex h-full items-center justify-center bg-amber-500 text-white">
        <div className="text-center">
          <h2 className="text-6xl font-bold">Large Gap</h2>
          <p className="mt-3 text-2xl">48px spacing</p>
        </div>
      </div>
    ),
    secondary: (
      <div className="flex h-full items-center justify-center bg-yellow-500 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Spacious</h2>
        </div>
      </div>
    ),
  },
};

/**
 * Realistic signage content example
 */
export const RealisticExample: Story = {
  args: {
    direction: 'row',
    ratio: '70-30',
    gap: 'md',
    primary: (
      <div className="flex h-full flex-col justify-between bg-white p-12">
        <header>
          <h1 className="text-8xl font-bold text-slate-900">Welcome</h1>
          <p className="mt-4 text-3xl text-slate-600">
            Join us for today's special presentation
          </p>
        </header>
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-9xl font-bold text-blue-600">2:00 PM</div>
            <div className="mt-4 text-3xl text-slate-700">Conference Room A</div>
          </div>
        </main>
      </div>
    ),
    secondary: (
      <div className="flex h-full flex-col gap-8 bg-slate-100 p-8">
        <div className="rounded-lg bg-white p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Agenda</h3>
          <ul className="mt-3 space-y-2 text-lg text-slate-700">
            <li>• Introduction</li>
            <li>• Keynote Speaker</li>
            <li>• Q&A Session</li>
          </ul>
        </div>
        <div className="rounded-lg bg-blue-50 p-6">
          <h3 className="text-2xl font-semibold text-blue-900">Next Session</h3>
          <p className="mt-2 text-lg text-blue-700">Workshop at 4:00 PM</p>
        </div>
      </div>
    ),
  },
};
