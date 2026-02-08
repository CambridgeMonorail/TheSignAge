import { act, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Countdown } from './Countdown';

describe('Countdown', () => {
  it('clamps to 0 and calls onComplete once', () => {
    vi.useFakeTimers();

    let current = 0;
    const now = () => current;
    const onComplete = vi.fn();

    render(
      <Countdown
        targetEpochMs={2000}
        now={now}
        format="mm:ss"
        onComplete={onComplete}
      />,
    );

    expect(screen.getByTestId('countdown')).toHaveTextContent('00:02');

    act(() => {
      current = 1000;
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('countdown')).toHaveTextContent('00:01');
    expect(onComplete).not.toHaveBeenCalled();

    act(() => {
      current = 2500;
      vi.advanceTimersByTime(1000);
    });
    expect(screen.getByTestId('countdown')).toHaveTextContent('00:00');
    expect(onComplete).toHaveBeenCalledTimes(1);

    act(() => {
      current = 10_000;
      vi.advanceTimersByTime(2000);
    });
    expect(onComplete).toHaveBeenCalledTimes(1);

    vi.useRealTimers();
  });
});
