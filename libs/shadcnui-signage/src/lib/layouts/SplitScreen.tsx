import { type ReactNode } from 'react';
import type { SplitRatio, SplitDirection, GapSize } from '../types/signage.types';

export type SplitScreenProps = {
  /**
   * Layout direction
   * @default 'row'
   */
  direction?: SplitDirection;

  /**
   * Split ratio between primary and secondary zones
   * @default '70-30'
   */
  ratio?: SplitRatio;

  /**
   * Primary content zone (larger area)
   */
  primary: ReactNode;

  /**
   * Secondary content zone (smaller area)
   */
  secondary: ReactNode;

  /**
   * Gap size between zones
   * @default 'md'
   */
  gap?: GapSize;

  /**
   * Additional CSS classes
   */
  className?: string;
};

/**
 * SplitScreen - Deterministic two-zone layout
 *
 * Provides a predictable layout with fixed ratios for common signage compositions.
 * Uses CSS Grid to ensure zones fill available space without collapsing.
 *
 * @example
 * ```tsx
 * <SplitScreen
 *   ratio="70-30"
 *   direction="row"
 *   primary={<MainContent />}
 *   secondary={<Sidebar />}
 * />
 * ```
 */
export function SplitScreen({
  direction = 'row',
  ratio = '70-30',
  primary,
  secondary,
  gap = 'md',
  className = '',
}: SplitScreenProps) {
  // Parse ratio to get percentages
  const [primaryPercent, secondaryPercent] = ratio.split('-').map(Number);

  // Map gap sizes to Tailwind classes
  const gapClasses: Record<GapSize, string> = {
    none: 'gap-0',
    sm: 'gap-4',
    md: 'gap-8',
    lg: 'gap-12',
  };

  // Grid template based on direction and ratio
  const gridTemplate =
    direction === 'row'
      ? `${primaryPercent}fr ${secondaryPercent}fr`
      : `${primaryPercent}fr ${secondaryPercent}fr`;

  const gridStyle = {
    display: 'grid',
    gridTemplate: direction === 'row' ? `1fr / ${gridTemplate}` : `${gridTemplate} / 1fr`,
    width: '100%',
    height: '100%',
  };

  return (
    <div
      className={`${gapClasses[gap]} ${className}`}
      style={gridStyle}
      data-testid="split-screen"
      data-direction={direction}
      data-ratio={ratio}
    >
      <div data-testid="split-screen-primary" className="min-w-0 min-h-0 overflow-hidden">
        {primary}
      </div>
      <div data-testid="split-screen-secondary" className="min-w-0 min-h-0 overflow-hidden">
        {secondary}
      </div>
    </div>
  );
}
