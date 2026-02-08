import { act, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { AutoPagingList } from './AutoPagingList';

type Item = { id: string; label: string };

describe('AutoPagingList', () => {
  it('pages through items and loops', async () => {
    vi.useFakeTimers();

    let nowMs = 0;
    const now = () => nowMs;
    const getKey = (item: Item) => item.id;
    const renderItem = (item: Item) => <div>{item.label}</div>;

    const items: Item[] = [
      { id: 'a', label: 'A' },
      { id: 'b', label: 'B' },
      { id: 'c', label: 'C' },
      { id: 'd', label: 'D' },
      { id: 'e', label: 'E' },
      { id: 'f', label: 'F' },
    ];

    const { rerender } = render(
      <AutoPagingList
        items={items}
        pageSize={3}
        dwellMs={1000}
        isPaused={true}
        now={now}
        getKey={getKey}
        renderItem={renderItem}
      />,
    );

    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
    expect(screen.queryByText('D')).not.toBeInTheDocument();

    rerender(
      <AutoPagingList
        items={items}
        pageSize={3}
        dwellMs={1000}
        isPaused={false}
        now={now}
        getKey={getKey}
        renderItem={renderItem}
      />,
    );

    await act(async () => {
      nowMs += 1000;
      await vi.advanceTimersByTimeAsync(1000);
    });
    expect(screen.getByText('D')).toBeInTheDocument();
    expect(screen.getByText('F')).toBeInTheDocument();
    expect(screen.queryByText('A')).not.toBeInTheDocument();

    await act(async () => {
      nowMs += 1000;
      await vi.advanceTimersByTimeAsync(1000);
    });
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.queryByText('D')).not.toBeInTheDocument();

    vi.useRealTimers();
  });
});
