import type { ClampLines } from '../types/signage.types';

/**
 * Get Tailwind CSS class for text clamping
 *
 * @param lines - Number of lines to clamp to (1-6)
 * @returns Tailwind CSS class for line clamping
 *
 * @example
 * ```tsx
 * const clampClass = getClampClass(2);
 * // Returns: 'line-clamp-2'
 * ```
 */
export function getClampClass(lines: ClampLines): string {
  return `line-clamp-${lines}`;
}
