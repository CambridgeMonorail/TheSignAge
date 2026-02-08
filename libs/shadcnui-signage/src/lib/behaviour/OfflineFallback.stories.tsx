import type { Meta, StoryObj } from '@storybook/react';
import { OfflineFallback } from './OfflineFallback';
import { ScreenFrame } from '../primitives/ScreenFrame';

const meta: Meta<typeof OfflineFallback> = {
  title: 'Signage/Behaviour/OfflineFallback',
  component: OfflineFallback,
  tags: ['autodocs'],
  argTypes: {
    isOnline: { control: 'boolean' },
    isHealthy: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <ScreenFrame resolution="1080p" scale={0.5}>
        <div className="bg-slate-950 p-12 h-full">
          <Story />
        </div>
      </ScreenFrame>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OfflineFallback>;

export const OnlineOfflineToggle: Story = {
  args: { isOnline: true, isHealthy: true },
  render: (args) => (
    <OfflineFallback
      {...args}
      fallback={
        <div className="rounded-3xl border border-slate-700/50 bg-slate-900/40 p-10">
          <div className="text-4xl font-bold text-white">Offline</div>
          <div className="mt-4 text-2xl text-slate-300">
            Showing stable fallback
          </div>
        </div>
      }
    >
      <div className="rounded-3xl border border-slate-700/50 bg-slate-900/40 p-10">
        <div className="text-4xl font-bold text-white">Online</div>
        <div className="mt-4 text-2xl text-slate-300">Showing live content</div>
      </div>
    </OfflineFallback>
  ),
};
