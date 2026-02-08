import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps, FC } from 'react';
import { useState } from 'react';
import { SignageTransition } from './SignageTransition';
import { ScreenFrame } from '../primitives/ScreenFrame';

const meta: Meta<typeof SignageTransition> = {
  title: 'Signage/Behaviour/SignageTransition',
  component: SignageTransition,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['none', 'crossfade', 'slide-left', 'slide-up'],
    },
    durationMs: { control: 'number' },
    reducedMotionBehaviour: {
      control: 'select',
      options: ['disable', 'shorten'],
    },
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
type Story = StoryObj<typeof SignageTransition>;

type SignageTransitionArgs = ComponentProps<typeof SignageTransition>;

const Card = ({ title }: { title: string }) => (
  <div className="h-[520px] rounded-3xl border border-slate-700/50 bg-slate-900/40 p-10">
    <div className="text-5xl font-bold text-white">{title}</div>
    <div className="mt-4 text-2xl text-slate-300">Transition wrapper</div>
  </div>
);

export const Crossfade: Story = {
  args: {
    type: 'crossfade',
    durationMs: 350,
    reducedMotionBehaviour: 'shorten',
  },
  render: (args) => <ToggleStory {...args} />,
};

const ToggleStory: FC<SignageTransitionArgs> = (args) => {
  const [on, setOn] = useState(true);
  return (
    <div className="space-y-6">
      <button
        className="rounded-md border border-slate-700 px-4 py-2 text-slate-200"
        onClick={() => setOn((v) => !v)}
      >
        Toggle
      </button>
      <SignageTransition {...args}>
        {on ? <Card title="A" /> : <Card title="B" />}
      </SignageTransition>
    </div>
  );
};

export const SlideLeft: Story = {
  args: {
    type: 'slide-left',
    durationMs: 350,
    reducedMotionBehaviour: 'shorten',
  },
  render: Crossfade.render,
};

export const ReducedMotionDisable: Story = {
  args: {
    type: 'slide-up',
    durationMs: 800,
    reducedMotionBehaviour: 'disable',
  },
  render: Crossfade.render,
};
