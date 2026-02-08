import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { StaleDataIndicator } from './StaleDataIndicator';

describe('StaleDataIndicator', () => {
  it('shows fresh state when data is recent', () => {
    vi.useFakeTimers();

    const nowMs = 1000;
    const now = () => nowMs;

    // Data updated 30 seconds ago (0.5 minutes)
    const lastUpdatedEpochMs = nowMs - 30000;

    render(
      <StaleDataIndicator
        now={now}
        lastUpdatedEpochMs={lastUpdatedEpochMs}
        warnAfterMin={5}
        staleAfterMin={15}
      />,
    );

    // Should show fresh indicator (text is wrapped in nested elements)
    expect(screen.getByText(/just now/i)).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('shows warning state after warn threshold', () => {
    vi.useFakeTimers();

    const nowMs = 1000;
    const now = () => nowMs;

    // Data updated 8 minutes ago (exceeds 5min warn threshold)
    const lastUpdatedEpochMs = nowMs - 8 * 60000;

    render(
      <StaleDataIndicator
        now={now}
        lastUpdatedEpochMs={lastUpdatedEpochMs}
        warnAfterMin={5}
        staleAfterMin={15}
      />,
    );

    // Should show warning state with age
    expect(screen.getByText(/8m ago/i)).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('shows stale state after stale threshold', () => {
    vi.useFakeTimers();

    const nowMs = 1000;
    const now = () => nowMs;

    // Data updated 20 minutes ago (exceeds 15min stale threshold)
    const lastUpdatedEpochMs = nowMs - 20 * 60000;

    render(
      <StaleDataIndicator
        now={now}
        lastUpdatedEpochMs={lastUpdatedEpochMs}
        warnAfterMin={5}
        staleAfterMin={15}
      />,
    );

    // Should show stale state with age
    expect(screen.getByText(/20m ago/i)).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('renders different variants', () => {
    vi.useFakeTimers();

    const nowMs = 1000;
    const now = () => nowMs;
    const lastUpdatedEpochMs = nowMs - 30000;

    const { rerender } = render(
      <StaleDataIndicator
        now={now}
        lastUpdatedEpochMs={lastUpdatedEpochMs}
        variant="badge"
      />,
    );

    expect(screen.getByText(/just now/i)).toBeInTheDocument();

    rerender(
      <StaleDataIndicator
        now={now}
        lastUpdatedEpochMs={lastUpdatedEpochMs}
        variant="dot"
      />,
    );

    expect(screen.getByText(/just now/i)).toBeInTheDocument();

    rerender(
      <StaleDataIndicator
        now={now}
        lastUpdatedEpochMs={lastUpdatedEpochMs}
        variant="text"
      />,
    );

    expect(screen.getByText(/just now/i)).toBeInTheDocument();

    vi.useRealTimers();
  });
});
