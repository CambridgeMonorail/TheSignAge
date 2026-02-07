/**
 * @tsa/shadcnui-signage
 *
 * React component library for building digital signage screens.
 * Optimized for fixed-aspect displays, distance readability, and predictable layouts.
 */

// Primitives
export { ScreenFrame } from './lib/primitives/ScreenFrame';
export type { ScreenFrameProps } from './lib/primitives/ScreenFrame';

// Layouts
export { SplitScreen } from './lib/layouts/SplitScreen';
export type { SplitScreenProps } from './lib/layouts/SplitScreen';

// Blocks
export { FullscreenHero } from './lib/blocks/FullscreenHero';
export type { FullscreenHeroProps } from './lib/blocks/FullscreenHero';
export { InfoCardGrid } from './lib/blocks/InfoCardGrid';
export type { InfoCardGridProps } from './lib/blocks/InfoCardGrid';

// Types
export type {
  Resolution,
  ResolutionDimensions,
  AspectRatio,
  SplitRatio,
  SplitDirection,
  GapSize,
  Density,
  ClampLines,
  Variant,
  InfoCardItem,
  ColumnCount,
} from './lib/types/signage.types';

// Utilities
export { getResolution, getAspectRatio } from './lib/utils/resolution';
export { getClampClass } from './lib/utils/clamp';
