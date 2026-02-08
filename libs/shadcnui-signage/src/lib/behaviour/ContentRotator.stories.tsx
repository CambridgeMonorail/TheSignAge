import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { ContentRotator } from './ContentRotator';
import { ScreenFrame } from '../primitives/ScreenFrame';

const meta: Meta<typeof ContentRotator> = {
  title: 'Signage/Behaviour/ContentRotator',
  component: ContentRotator,
  tags: ['autodocs'],
  argTypes: {
    intervalMs: { control: 'number' },
    isPaused: { control: 'boolean' },
    transition: { control: 'select', options: ['none', 'fade', 'slide'] },
    transitionDurationMs: { control: 'number' },
    startIndex: { control: 'number' },
  },
  decorators: [
    (Story) => (
      <ScreenFrame resolution="1080p" scale={0.45}>
        <div className="bg-slate-950 p-12 h-full">
          <Story />
        </div>
      </ScreenFrame>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ContentRotator>;

const Slide = ({ title }: { title: string }) => (
  <div className="h-[520px] rounded-3xl border border-slate-700/50 bg-slate-900/40 p-10">
    <div className="text-5xl font-bold text-white">{title}</div>
    <div className="mt-4 text-2xl text-slate-300">Rotating content block</div>
  </div>
);

export const DefaultRotation: Story = {
  args: {
    intervalMs: 5000,
    transition: 'fade',
    children: [
      <Slide key="a" title="Announcements" />,
      <Slide key="b" title="Events" />,
      <Slide key="c" title="Weather" />,
    ],
  },
};

export const PauseResumeControls: Story = {
  render: () => <PauseResumeControlsStory />,
};

const PauseResumeControlsStory: FC = () => {
  const [paused, setPaused] = useState(false);
  return (
    <div className="space-y-6">
      <div className="flex gap-3">
        <button
          className="rounded-md border border-slate-700 px-4 py-2 text-slate-200"
          onClick={() => setPaused((p) => !p)}
        >
          {paused ? 'Resume' : 'Pause'}
        </button>
      </div>
      <ContentRotator intervalMs={2500} isPaused={paused} transition="slide">
        {[
          <Slide key="1" title="Slide 1" />,
          <Slide key="2" title="Slide 2" />,
          <Slide key="3" title="Slide 3" />,
        ]}
      </ContentRotator>
    </div>
  );
};

export const DynamicChildrenLengthChange: Story = {
  render: () => <DynamicChildrenLengthChangeStory />,
};

const DynamicChildrenLengthChangeStory: FC = () => {
  const [slides, setSlides] = useState([
    <Slide key="a" title="Alpha" />,
    <Slide key="b" title="Bravo" />,
    <Slide key="c" title="Charlie" />,
  ]);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setSlides((s) => s.slice(0, 2));
    }, 6000);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="space-y-4">
      <div className="text-sm text-slate-400">
        After 6s, the third child is removed.
      </div>
      <ContentRotator intervalMs={2000} transition="fade">
        {slides}
      </ContentRotator>
    </div>
  );
};
