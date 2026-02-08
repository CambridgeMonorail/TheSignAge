import { act, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ContentRotator } from './ContentRotator';

describe('ContentRotator', () => {
  it('rotates through children', async () => {
    vi.useFakeTimers();

    let nowMs = 0;
    const now = () => nowMs;

    render(
      <ContentRotator intervalMs={1000} now={now} transition="none">
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </ContentRotator>,
    );

    // Should start with first child
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.queryByText('Slide 2')).not.toBeInTheDocument();

    // Advance to second child
    await act(async () => {
      nowMs += 1000;
      await vi.advanceTimersByTimeAsync(1000);
    });

    expect(screen.getByText('Slide 2')).toBeInTheDocument();
    expect(screen.queryByText('Slide 1')).not.toBeInTheDocument();

    // Advance to third child
    await act(async () => {
      nowMs += 1000;
      await vi.advanceTimersByTimeAsync(1000);
    });

    expect(screen.getByText('Slide 3')).toBeInTheDocument();
    expect(screen.queryByText('Slide 2')).not.toBeInTheDocument();

    // Should loop back to first
    await act(async () => {
      nowMs += 1000;
      await vi.advanceTimersByTimeAsync(1000);
    });

    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.queryByText('Slide 3')).not.toBeInTheDocument();

    vi.useRealTimers();
  });

  it('respects isPaused prop', async () => {
    vi.useFakeTimers();

    let nowMs = 0;
    const now = () => nowMs;

    const { rerender } = render(
      <ContentRotator
        intervalMs={1000}
        now={now}
        transition="none"
        isPaused={true}
      >
        <div>Slide 1</div>
        <div>Slide 2</div>
      </ContentRotator>,
    );

    expect(screen.getByText('Slide 1')).toBeInTheDocument();

    // Time passes but should not rotate while paused
    await act(async () => {
      nowMs += 2000;
      await vi.advanceTimersByTimeAsync(2000);
    });

    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.queryByText('Slide 2')).not.toBeInTheDocument();

    // Unpause
    rerender(
      <ContentRotator
        intervalMs={1000}
        now={now}
        transition="none"
        isPaused={false}
      >
        <div>Slide 1</div>
        <div>Slide 2</div>
      </ContentRotator>,
    );

    // Now it should rotate
    await act(async () => {
      nowMs += 1000;
      await vi.advanceTimersByTimeAsync(1000);
    });

    expect(screen.getByText('Slide 2')).toBeInTheDocument();

    vi.useRealTimers();
  });
});
