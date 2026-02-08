import type { Meta, StoryObj } from '@storybook/react';
import { Clock } from './Clock';
import { ScreenFrame } from '../primitives/ScreenFrame';

const meta: Meta<typeof Clock> = {
  title: 'Signage/Behaviour/Clock',
  component: Clock,
  tags: ['autodocs'],
  argTypes: {
    format: { control: 'select', options: ['HH:mm', 'HH:mm:ss'] },
    timezone: { control: 'text' },
    locale: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <ScreenFrame resolution="1080p" scale={0.6}>
        <div className="bg-slate-950 p-24 h-full flex items-center justify-center">
          <Story />
        </div>
      </ScreenFrame>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Clock>;

export const HHmm: Story = {
  args: { format: 'HH:mm', timezone: undefined },
  render: (args) => (
    <Clock {...args} className="text-8xl font-bold text-white" />
  ),
};

export const HHmmss: Story = {
  args: { format: 'HH:mm:ss', timezone: undefined },
  render: (args) => (
    <Clock {...args} className="text-7xl font-bold text-white" />
  ),
};

export const TimezoneExample: Story = {
  args: { format: 'HH:mm', timezone: 'America/New_York' },
  render: (args) => (
    <div className="text-center">
      <Clock {...args} className="text-8xl font-bold text-white" />
      <div className="mt-6 text-2xl text-slate-400">America/New_York</div>
    </div>
  ),
};
