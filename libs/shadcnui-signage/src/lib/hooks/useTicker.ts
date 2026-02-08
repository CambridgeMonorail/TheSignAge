import { useEffect, useMemo, useRef, useState } from 'react';
import type { NowProvider } from '../types/time.types';

export type TickerAlignment = 'none' | 'second' | 'minute';

export type UseTickerOptions = {
  intervalMs: number;
  enabled?: boolean;
  now?: NowProvider;
  alignTo?: TickerAlignment;
};

type ResolvedTickerOptions = {
  baseMs: number;
  enabled: boolean;
  now: NowProvider;
  alignTo: TickerAlignment;
};

const defaultNow: NowProvider = () => Date.now();

function resolveOptions(options: UseTickerOptions): ResolvedTickerOptions {
  const alignTo = options.alignTo ?? 'none';
  const baseMs =
    alignTo === 'second'
      ? 1000
      : alignTo === 'minute'
        ? 60_000
        : options.intervalMs;

  return {
    baseMs,
    enabled: options.enabled ?? true,
    now: options.now ?? defaultNow,
    alignTo,
  };
}

function getNextAlignedAtMs(nowMs: number, baseMs: number) {
  return Math.floor(nowMs / baseMs) * baseMs + baseMs;
}

/**
 * Drift-resistant ticker that triggers rerenders on a cadence.
 *
 * - `alignTo` (second/minute) schedules ticks aligned to boundaries.
 * - `alignTo: 'none'` schedules using a correction loop so drift does not accumulate.
 */
export function useTicker(options: UseTickerOptions) {
  const { alignTo, enabled, intervalMs, now } = options;

  const resolved = useMemo(
    () =>
      resolveOptions({
        alignTo,
        enabled,
        intervalMs,
        now,
      }),
    [alignTo, enabled, intervalMs, now],
  );

  const [tick, setTick] = useState(0);
  const timeoutIdRef = useRef<number | null>(null);
  const nextAtRef = useRef<number | null>(null);

  useEffect(() => {
    if (!resolved.enabled || resolved.baseMs <= 0) {
      return;
    }

    let cancelled = false;

    const clear = () => {
      if (timeoutIdRef.current !== null) {
        window.clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = null;
      }
    };

    const scheduleNext = () => {
      if (cancelled) {
        return;
      }

      const nowMs = resolved.now();

      if (resolved.alignTo === 'second' || resolved.alignTo === 'minute') {
        nextAtRef.current = getNextAlignedAtMs(nowMs, resolved.baseMs);
      } else {
        const existingNextAt = nextAtRef.current;
        if (existingNextAt === null) {
          nextAtRef.current = nowMs + resolved.baseMs;
        } else {
          let nextAt = existingNextAt + resolved.baseMs;
          while (nextAt <= nowMs) {
            nextAt += resolved.baseMs;
          }
          nextAtRef.current = nextAt;
        }
      }

      const delayMs = Math.max(0, (nextAtRef.current ?? nowMs) - nowMs);

      clear();
      timeoutIdRef.current = window.setTimeout(() => {
        setTick((t) => t + 1);
        scheduleNext();
      }, delayMs);
    };

    scheduleNext();

    return () => {
      cancelled = true;
      clear();
      nextAtRef.current = null;
    };
  }, [resolved]);

  return tick;
}
