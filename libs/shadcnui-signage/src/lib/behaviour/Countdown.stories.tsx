import type { Meta, StoryObj } from '@storybook/react';
import { Countdown } from './Countdown';
import { ScreenFrame } from '../primitives/ScreenFrame';

const meta: Meta<typeof Countdown> = {
  title: 'Signage/Behaviour/Countdown',
  component: Countdown,
  tags: ['autodocs'],
  argTypes: {
    format: { control: 'select', options: ['mm:ss', 'HH:mm:ss', 'human'] },
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
type Story = StoryObj<typeof Countdown>;

export const NinetySeconds: Story = {
  render: () => {
    const target = Date.now() + 90_000;
    return (
      <Countdown
        targetEpochMs={target}
        format="mm:ss"
        className="text-8xl font-bold text-white"
      />
    );
  },
};

export const Completed: Story = {
  render: () => {
    const target = Date.now() - 10_000;
    return (
      <Countdown
        targetEpochMs={target}
        format="human"
        className="text-6xl font-bold text-white"
      />
    );
  },
};
