import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Clock } from './Clock';

describe('Clock', () => {
  it('formats time correctly', () => {
    vi.useFakeTimers();

    const now = () => new Date('2026-02-08T14:30:45Z').getTime();

    render(<Clock now={now} format="HH:mm" />);

    // Should show 14:30 (no seconds)
    expect(screen.getByText('14:30')).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('shows seconds when format includes them', () => {
    vi.useFakeTimers();

    const now = () => new Date('2026-02-08T14:30:45Z').getTime();

    render(<Clock now={now} format="HH:mm:ss" />);

    // Should show 14:30:45 (with seconds)
    expect(screen.getByText('14:30:45')).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('respects timezone prop', () => {
    vi.useFakeTimers();

    // UTC time: 14:30
    const now = () => new Date('2026-02-08T14:30:00Z').getTime();

    const { rerender } = render(
      <Clock now={now} format="HH:mm" timezone="UTC" />,
    );

    expect(screen.getByText('14:30')).toBeInTheDocument();

    // EST is UTC-5, so 14:30 UTC = 09:30 EST
    rerender(<Clock now={now} format="HH:mm" timezone="America/New_York" />);

    expect(screen.getByText('09:30')).toBeInTheDocument();

    vi.useRealTimers();
  });
});
