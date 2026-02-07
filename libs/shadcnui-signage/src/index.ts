/**
 * @tsa/shadcnui-signage
 *
 * React component library for building digital signage screens.
 * Optimized for fixed-aspect displays, distance readability, and predictable layouts.
 */

// Primitives
export { ScreenFrame } from './lib/primitives/ScreenFrame';
export type { ScreenFrameProps } from './lib/primitives/ScreenFrame';
export { MetricCard } from './lib/primitives/MetricCard';
export type { MetricCardProps } from './lib/primitives/MetricCard';
export { EventCard } from './lib/primitives/EventCard';
export type { EventCardProps } from './lib/primitives/EventCard';
export { AnnouncementCard } from './lib/primitives/AnnouncementCard';
export type { AnnouncementCardProps } from './lib/primitives/AnnouncementCard';

// Layouts
export { SplitScreen } from './lib/layouts/SplitScreen';
export type { SplitScreenProps } from './lib/layouts/SplitScreen';
export { SignageContainer } from './lib/layouts/SignageContainer';
export type {
  SignageContainerProps,
  GradientVariant,
} from './lib/layouts/SignageContainer';
export { SignageHeader } from './lib/layouts/SignageHeader';
export type { SignageHeaderProps } from './lib/layouts/SignageHeader';

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
