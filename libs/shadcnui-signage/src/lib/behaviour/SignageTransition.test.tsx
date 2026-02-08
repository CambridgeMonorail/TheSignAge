import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SignageTransition } from './SignageTransition';

describe('SignageTransition', () => {
  it('renders children', () => {
    render(
      <SignageTransition type="none">
        <div>Content</div>
      </SignageTransition>,
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('handles children changes', async () => {
    vi.useFakeTimers();

    const { rerender } = render(
      <SignageTransition type="none" durationMs={0}>
        <div>Content A</div>
      </SignageTransition>,
    );

    expect(screen.getByText('Content A')).toBeInTheDocument();

    // Change children
    rerender(
      <SignageTransition type="none" durationMs={0}>
        <div>Content B</div>
      </SignageTransition>,
    );

    // With duration=0, transition should be immediate
    expect(screen.getByText('Content B')).toBeInTheDocument();

    vi.useRealTimers();
  });

  it('applies correct className', () => {
    const { container, rerender } = render(
      <SignageTransition type="crossfade" className="test-class">
        <div>Content</div>
      </SignageTransition>,
    );

    expect(container.querySelector('.test-class')).toBeTruthy();

    rerender(
      <SignageTransition type="slide-left" className="test-class">
        <div>Content</div>
      </SignageTransition>,
    );

    expect(container.querySelector('.test-class')).toBeTruthy();
  });

  it('accepts reducedMotionBehaviour prop', () => {
    // Mock prefers-reduced-motion
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: query === '(prefers-reduced-motion: reduce)',
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    });

    const { container } = render(
      <SignageTransition type="crossfade" reducedMotionBehaviour="disable">
        <div>Content</div>
      </SignageTransition>,
    );

    // Component should render without errors
    expect(container.querySelector('div')).toBeTruthy();
  });
});
