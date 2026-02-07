import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ScreenFrame } from './ScreenFrame';

describe('ScreenFrame', () => {
  it('should render children', () => {
    render(
      <ScreenFrame>
        <div data-testid="child-content">Test Content</div>
      </ScreenFrame>
    );

    expect(screen.getByTestId('child-content')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply 1080p resolution by default', () => {
    render(
      <ScreenFrame>
        <div>Content</div>
      </ScreenFrame>
    );

    const frame = screen.getByTestId('screen-frame');
    expect(frame).toHaveAttribute('data-resolution', '1080p');
    expect(frame).toHaveAttribute('data-aspect-ratio', '16:9');
    expect(frame).toHaveStyle({ width: '1920px', height: '1080px' });
  });

  it('should apply 4k resolution when specified', () => {
    render(
      <ScreenFrame resolution="4k">
        <div>Content</div>
      </ScreenFrame>
    );

    const frame = screen.getByTestId('screen-frame');
    expect(frame).toHaveAttribute('data-resolution', '4k');
    expect(frame).toHaveAttribute('data-aspect-ratio', '16:9');
    expect(frame).toHaveStyle({ width: '3840px', height: '2160px' });
  });

  it('should apply portrait-1080p resolution when specified', () => {
    render(
      <ScreenFrame resolution="portrait-1080p">
        <div>Content</div>
      </ScreenFrame>
    );

    const frame = screen.getByTestId('screen-frame');
    expect(frame).toHaveAttribute('data-resolution', 'portrait-1080p');
    expect(frame).toHaveAttribute('data-aspect-ratio', '9:16');
    expect(frame).toHaveStyle({ width: '1080px', height: '1920px' });
  });

  it('should apply scale transform', () => {
    render(
      <ScreenFrame scale={0.5}>
        <div>Content</div>
      </ScreenFrame>
    );

    const frame = screen.getByTestId('screen-frame');
    expect(frame).toHaveStyle({ transform: 'scale(0.5)' });
  });

  it('should not show safe area by default', () => {
    render(
      <ScreenFrame>
        <div>Content</div>
      </ScreenFrame>
    );

    expect(screen.queryByTestId('safe-area-overlay')).not.toBeInTheDocument();
  });

  it('should show safe area when enabled', () => {
    render(
      <ScreenFrame showSafeArea>
        <div>Content</div>
      </ScreenFrame>
    );

    const safeArea = screen.getByTestId('safe-area-overlay');
    expect(safeArea).toBeInTheDocument();
    expect(safeArea).toHaveAttribute('aria-hidden', 'true');
  });

  it('should apply custom className', () => {
    render(
      <ScreenFrame className="custom-class">
        <div>Content</div>
      </ScreenFrame>
    );

    const frame = screen.getByTestId('screen-frame');
    expect(frame).toHaveClass('custom-class');
  });

  it('should have overflow hidden to clip content', () => {
    render(
      <ScreenFrame>
        <div>Content</div>
      </ScreenFrame>
    );

    const frame = screen.getByTestId('screen-frame');
    expect(frame).toHaveStyle({ overflow: 'hidden' });
  });
});
