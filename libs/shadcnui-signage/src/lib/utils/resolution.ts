import type { Resolution, ResolutionDimensions, AspectRatio } from '../types/signage.types';

/**
 * Resolution dimensions lookup table
 */
const RESOLUTION_MAP: Record<Resolution, ResolutionDimensions> = {
  '1080p': { width: 1920, height: 1080 },
  '4k': { width: 3840, height: 2160 },
  'portrait-1080p': { width: 1080, height: 1920 },
};

/**
 * Get resolution dimensions for a given resolution type
 *
 * @param resolution - The resolution type
 * @returns The width and height in pixels
 *
 * @example
 * ```tsx
 * const { width, height } = getResolution('1080p');
 * // Returns: { width: 1920, height: 1080 }
 * ```
 */
export function getResolution(resolution: Resolution): ResolutionDimensions {
  return RESOLUTION_MAP[resolution];
}

/**
 * Calculate greatest common divisor (GCD) using Euclidean algorithm
 */
function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

/**
 * Get the aspect ratio for a given resolution
 *
 * @param resolution - The resolution type
 * @returns The aspect ratio as simplified width and height
 *
 * @example
 * ```tsx
 * const ratio = getAspectRatio('1080p');
 * // Returns: { width: 16, height: 9 }
 * ```
 */
export function getAspectRatio(resolution: Resolution): AspectRatio {
  const { width, height } = getResolution(resolution);
  const divisor = gcd(width, height);

  return {
    width: width / divisor,
    height: height / divisor,
  };
}
