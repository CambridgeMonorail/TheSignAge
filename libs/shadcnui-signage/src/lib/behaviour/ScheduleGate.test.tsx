import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ScheduleGate } from './ScheduleGate';

describe('ScheduleGate', () => {
  it('renders children when a window matches (weekday + time)', () => {
    const now = () => new Date('2026-02-09T10:30:00').getTime(); // Monday local

    render(
      <ScheduleGate
        now={now}
        windows={[{ days: ['mon'], start: '09:00', end: '17:00' }]}
        fallback={<div>Closed</div>}
      >
        <div>Open</div>
      </ScheduleGate>,
    );

    expect(screen.getByText('Open')).toBeInTheDocument();
    expect(screen.queryByText('Closed')).not.toBeInTheDocument();
  });

  it('renders fallback when no windows match', () => {
    const now = () => new Date('2026-02-09T20:30:00').getTime();

    render(
      <ScheduleGate
        now={now}
        windows={[{ days: ['mon'], start: '09:00', end: '17:00' }]}
        fallback={<div>Closed</div>}
      >
        <div>Open</div>
      </ScheduleGate>,
    );

    expect(screen.getByText('Closed')).toBeInTheDocument();
    expect(screen.queryByText('Open')).not.toBeInTheDocument();
  });

  it('supports overnight windows (start > end)', () => {
    const now = () => new Date('2026-02-09T01:30:00').getTime();

    render(
      <ScheduleGate
        now={now}
        windows={[{ start: '22:00', end: '06:00' }]}
        fallback={<div>Not in window</div>}
      >
        <div>Overnight</div>
      </ScheduleGate>,
    );

    expect(screen.getByText('Overnight')).toBeInTheDocument();
  });
});
