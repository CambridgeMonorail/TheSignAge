import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { AutoPagingList } from './AutoPagingList';
import { ScreenFrame } from '../primitives/ScreenFrame';

type EventItem = { id: string; title: string; time: string };

const meta: Meta<typeof AutoPagingList> = {
  title: 'Signage/Behaviour/AutoPagingList',
  component: AutoPagingList,
  tags: ['autodocs'],
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
type Story = StoryObj<typeof AutoPagingList>;

const row = (item: EventItem) => (
  <div className="flex items-center justify-between rounded-2xl border border-slate-700/50 bg-slate-900/30 px-6 py-4">
    <div className="text-2xl text-white">{item.title}</div>
    <div className="text-xl text-slate-300 tabular-nums">{item.time}</div>
  </div>
);

export const EventsPaging: Story = {
  render: () => <EventsPagingStory />,
};

const EventsPagingStory: FC = () => {
  const items: EventItem[] = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: `event-${i + 1}`,
        title: `Event ${i + 1}`,
        time: `${9 + Math.floor(i / 2)}:${i % 2 === 0 ? '00' : '30'}`,
      })),
    [],
  );

  return (
    <AutoPagingList
      items={items}
      pageSize={5}
      dwellMs={2000}
      getKey={(item) => item.id}
      renderItem={(item) => row(item)}
      className="space-y-3"
    />
  );
};

export const ItemsUpdateMidCycle: Story = {
  render: () => <ItemsUpdateMidCycleStory />,
};

const ItemsUpdateMidCycleStory: FC = () => {
  const [items, setItems] = useState<EventItem[]>(
    Array.from({ length: 12 }).map((_, i) => ({
      id: `event-${i + 1}`,
      title: `Event ${i + 1}`,
      time: `10:${pad(i * 5)}`,
    })),
  );

  useEffect(() => {
    const id = window.setTimeout(() => {
      setItems((current) => {
        const next = [...current];
        next.splice(2, 0, { id: 'new', title: 'New Item', time: '11:00' });
        return next;
      });
    }, 4500);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className="space-y-4">
      <div className="text-sm text-slate-400">
        After 4.5s, an item is inserted near the top.
      </div>
      <AutoPagingList
        items={items}
        pageSize={4}
        dwellMs={2000}
        getKey={(item) => item.id}
        renderItem={(item) => row(item)}
        className="space-y-3"
      />
    </div>
  );
};

export const PauseAndResume: Story = {
  render: () => <PauseAndResumeStory />,
};

const PauseAndResumeStory: FC = () => {
  const [paused, setPaused] = useState(false);
  const items: EventItem[] = Array.from({ length: 10 }).map((_, i) => ({
    id: `event-${i + 1}`,
    title: `Item ${i + 1}`,
    time: `12:${pad(i * 3)}`,
  }));

  return (
    <div className="space-y-6">
      <button
        className="rounded-md border border-slate-700 px-4 py-2 text-slate-200"
        onClick={() => setPaused((p) => !p)}
      >
        {paused ? 'Resume' : 'Pause'}
      </button>
      <AutoPagingList
        items={items}
        pageSize={3}
        dwellMs={1500}
        isPaused={paused}
        getKey={(item) => item.id}
        renderItem={(item) => row(item)}
        className="space-y-3"
      />
    </div>
  );
};

function pad(value: number) {
  return String(value).padStart(2, '0');
}
