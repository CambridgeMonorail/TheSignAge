import type { Meta, StoryObj } from '@storybook/react';
import { StaleDataIndicator } from './StaleDataIndicator';
import { ScreenFrame } from '../primitives/ScreenFrame';

const meta: Meta<typeof StaleDataIndicator> = {
  title: 'Signage/Behaviour/StaleDataIndicator',
  component: StaleDataIndicator,
  tags: ['autodocs'],
  argTypes: {
    warnAfterMin: { control: 'number' },
    staleAfterMin: { control: 'number' },
    variant: { control: 'select', options: ['badge', 'dot', 'text'] },
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
type Story = StoryObj<typeof StaleDataIndicator>;

export const Fresh: Story = {
  render: () => (
    <StaleDataIndicator
      lastUpdatedEpochMs={Date.now() - 45_000}
      variant="badge"
    />
  ),
};

export const Warning: Story = {
  render: () => (
    <StaleDataIndicator
      lastUpdatedEpochMs={Date.now() - 8 * 60_000}
      variant="badge"
    />
  ),
};

export const Stale: Story = {
  render: () => (
    <StaleDataIndicator
      lastUpdatedEpochMs={Date.now() - 30 * 60_000}
      variant="badge"
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <StaleDataIndicator
        lastUpdatedEpochMs={Date.now() - 2 * 60_000}
        variant="badge"
      />
      <StaleDataIndicator
        lastUpdatedEpochMs={Date.now() - 12 * 60_000}
        variant="dot"
      />
      <StaleDataIndicator
        lastUpdatedEpochMs={Date.now() - 40 * 60_000}
        variant="text"
      />
    </div>
  ),
};
