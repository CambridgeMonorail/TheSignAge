/**
 * Type definitions for signage components
 */

/**
 * Supported signage resolutions
 */
export type Resolution = '1080p' | '4k' | 'portrait-1080p';

/**
 * Resolution dimensions in pixels
 */
export type ResolutionDimensions = {
  width: number;
  height: number;
};

/**
 * Aspect ratio representation
 */
export type AspectRatio = {
  width: number;
  height: number;
};

/**
 * Split screen layout ratios
 */
export type SplitRatio = '50-50' | '60-40' | '70-30' | '80-20';

/**
 * Split screen direction
 */
export type SplitDirection = 'row' | 'column';

/**
 * Gap sizes for layouts
 */
export type GapSize = 'none' | 'sm' | 'md' | 'lg';

/**
 * Density variants for grids
 */
export type Density = 'comfortable' | 'compact';

/**
 * Text clamping line counts
 */
export type ClampLines = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Variant styles
 */
export type Variant = 'light' | 'dark';

/**
 * Info card item data structure
 */
export type InfoCardItem = {
  title: string;
  value?: string;
  description?: string;
  meta?: string;
};

/**
 * Column count for grids
 */
export type ColumnCount = 2 | 3 | 4;
