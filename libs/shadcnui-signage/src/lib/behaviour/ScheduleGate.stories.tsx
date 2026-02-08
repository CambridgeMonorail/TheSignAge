import type { Meta, StoryObj } from '@storybook/react';
import { ScheduleGate } from './ScheduleGate';
import { ScreenFrame } from '../primitives/ScreenFrame';

const meta: Meta<typeof ScheduleGate> = {
  title: 'Signage/Behaviour/ScheduleGate',
  component: ScheduleGate,
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
type Story = StoryObj<typeof ScheduleGate>;

const Box = ({ title }: { title: string }) => (
  <div className="rounded-3xl border border-slate-700/50 bg-slate-900/40 p-10">
    <div className="text-5xl font-bold text-white">{title}</div>
    <div className="mt-4 text-2xl text-slate-300">Window matched</div>
  </div>
);

export const WeekdayOfficeHours: Story = {
  render: () => {
    const fixedNow = () => new Date('2026-02-09T10:30:00').getTime(); // Monday local

    return (
      <ScheduleGate
        now={fixedNow}
        windows={[
          {
            days: ['mon', 'tue', 'wed', 'thu', 'fri'],
            start: '09:00',
            end: '17:00',
          },
        ]}
        fallback={<div className="text-3xl text-slate-300">Closed</div>}
      >
        <Box title="Open" />
      </ScheduleGate>
    );
  },
};

export const OvernightWindow: Story = {
  render: () => {
    const fixedNow = () => new Date('2026-02-09T01:30:00').getTime(); // local 01:30
    return (
      <ScheduleGate
        now={fixedNow}
        windows={[{ start: '22:00', end: '06:00' }]}
        fallback={<div className="text-3xl text-slate-300">Not in window</div>}
      >
        <Box title="Overnight Mode" />
      </ScheduleGate>
    );
  },
};

export const DaypartingExample: Story = {
  render: () => {
    const nowBreakfast = () => new Date('2026-02-09T08:15:00').getTime();
    return (
      <div className="space-y-6">
        <ScheduleGate
          now={nowBreakfast}
          windows={[{ start: '06:00', end: '10:30' }]}
          fallback={null}
        >
          <Box title="Breakfast" />
        </ScheduleGate>
        <ScheduleGate
          now={nowBreakfast}
          windows={[{ start: '10:30', end: '15:00' }]}
          fallback={null}
        >
          <Box title="Lunch" />
        </ScheduleGate>
        <ScheduleGate
          now={nowBreakfast}
          windows={[{ start: '15:00', end: '22:00' }]}
          fallback={null}
        >
          <Box title="Dinner" />
        </ScheduleGate>
      </div>
    );
  },
};
