import { type ReactNode, type CSSProperties } from 'react';
import { getResolution, getAspectRatio } from '../utils/resolution';
import type { Resolution } from '../types/signage.types';

export type ScreenFrameProps = {
  /**
   * Target resolution for the signage screen
   * @default '1080p'
   */
  resolution?: Resolution;

  /**
   * Scale factor for preview
   * @default 1
   */
  scale?: number;

  /**
   * Show safe area overlay for QA and review
   * @default false
   */
  showSafeArea?: boolean;

  /**
   * Content to render within the screen frame
   */
  children: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
};

/**
 * ScreenFrame - Preview container for signage screens
 *
 * Provides a fixed-resolution container that enforces exact aspect ratios
 * for signage content. Useful for previewing content in Storybook and demo views.
 *
 * @example
 * ```tsx
 * <ScreenFrame resolution="1080p" showSafeArea>
 *   <YourSignageContent />
 * </ScreenFrame>
 * ```
 */
export function ScreenFrame({
  resolution = '1080p',
  scale = 1,
  showSafeArea = false,
  children,
  className = '',
}: ScreenFrameProps) {
  const { width, height } = getResolution(resolution);
  const aspectRatio = getAspectRatio(resolution);

  const containerStyle: CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    transform: `scale(${scale})`,
    transformOrigin: 'top left',
    position: 'relative',
    overflow: 'hidden',
  };

  const safeAreaStyle: CSSProperties = {
    position: 'absolute',
    inset: '5%',
    border: '2px dashed rgba(255, 0, 0, 0.5)',
    pointerEvents: 'none',
    zIndex: 9999,
  };

  return (
    <div
      className={`bg-background ${className}`}
      style={containerStyle}
      data-testid="screen-frame"
      data-resolution={resolution}
      data-aspect-ratio={`${aspectRatio.width}:${aspectRatio.height}`}
    >
      {children}
      {showSafeArea && (
        <div style={safeAreaStyle} data-testid="safe-area-overlay" aria-hidden="true" />
      )}
    </div>
  );
}
