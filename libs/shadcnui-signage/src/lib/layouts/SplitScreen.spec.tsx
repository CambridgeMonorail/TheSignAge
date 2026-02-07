import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SplitScreen } from './SplitScreen';

describe('SplitScreen', () => {
  it('should render primary and secondary content', () => {
    render(
      <SplitScreen
        primary={<div data-testid="primary-content">Primary</div>}
        secondary={<div data-testid="secondary-content">Secondary</div>}
      />
    );

    expect(screen.getByTestId('primary-content')).toBeInTheDocument();
    expect(screen.getByTestId('secondary-content')).toBeInTheDocument();
  });

  it('should apply default row direction', () => {
    render(
      <SplitScreen primary={<div>Primary</div>} secondary={<div>Secondary</div>} />
    );

    const container = screen.getByTestId('split-screen');
    expect(container).toHaveAttribute('data-direction', 'row');
  });

  it('should apply column direction when specified', () => {
    render(
      <SplitScreen
        direction="column"
        primary={<div>Primary</div>}
        secondary={<div>Secondary</div>}
      />
    );

    const container = screen.getByTestId('split-screen');
    expect(container).toHaveAttribute('data-direction', 'column');
  });

  it('should apply default 70-30 ratio', () => {
    render(
      <SplitScreen primary={<div>Primary</div>} secondary={<div>Secondary</div>} />
    );

    const container = screen.getByTestId('split-screen');
    expect(container).toHaveAttribute('data-ratio', '70-30');
  });

  it('should apply 50-50 ratio when specified', () => {
    render(
      <SplitScreen
        ratio="50-50"
        primary={<div>Primary</div>}
        secondary={<div>Secondary</div>}
      />
    );

    const container = screen.getByTestId('split-screen');
    expect(container).toHaveAttribute('data-ratio', '50-50');
  });

  it('should apply 60-40 ratio when specified', () => {
    render(
      <SplitScreen
        ratio="60-40"
        primary={<div>Primary</div>}
        secondary={<div>Secondary</div>}
      />
    );

    const container = screen.getByTestId('split-screen');
    expect(container).toHaveAttribute('data-ratio', '60-40');
  });

  it('should apply 80-20 ratio when specified', () => {
    render(
      <SplitScreen
        ratio="80-20"
        primary={<div>Primary</div>}
        secondary={<div>Secondary</div>}
      />
    );

    const container = screen.getByTestId('split-screen');
    expect(container).toHaveAttribute('data-ratio', '80-20');
  });

  it('should apply no gap when gap is none', () => {
    render(
      <SplitScreen
        gap="none"
        primary={<div>Primary</div>}
        secondary={<div>Secondary</div>}
      />
    );

    const container = screen.getByTestId('split-screen');
    expect(container).toHaveClass('gap-0');
  });

  it('should apply small gap when gap is sm', () => {
    render(
      <SplitScreen
        gap="sm"
        primary={<div>Primary</div>}
        secondary={<div>Secondary</div>}
      />
    );

    const container = screen.getByTestId('split-screen');
    expect(container).toHaveClass('gap-4');
  });

  it('should apply medium gap by default', () => {
    render(
      <SplitScreen primary={<div>Primary</div>} secondary={<div>Secondary</div>} />
    );

    const container = screen.getByTestId('split-screen');
    expect(container).toHaveClass('gap-8');
  });

  it('should apply large gap when gap is lg', () => {
    render(
      <SplitScreen
        gap="lg"
        primary={<div>Primary</div>}
        secondary={<div>Secondary</div>}
      />
    );

    const container = screen.getByTestId('split-screen');
    expect(container).toHaveClass('gap-12');
  });

  it('should apply custom className', () => {
    render(
      <SplitScreen
        className="custom-split"
        primary={<div>Primary</div>}
        secondary={<div>Secondary</div>}
      />
    );

    const container = screen.getByTestId('split-screen');
    expect(container).toHaveClass('custom-split');
  });

  it('should have overflow hidden on child zones to prevent content overflow', () => {
    render(
      <SplitScreen primary={<div>Primary</div>} secondary={<div>Secondary</div>} />
    );

    const primary = screen.getByTestId('split-screen-primary');
    const secondary = screen.getByTestId('split-screen-secondary');

    expect(primary).toHaveClass('overflow-hidden');
    expect(secondary).toHaveClass('overflow-hidden');
  });

  it('should use grid display', () => {
    render(
      <SplitScreen primary={<div>Primary</div>} secondary={<div>Secondary</div>} />
    );

    const container = screen.getByTestId('split-screen');
    expect(container).toHaveStyle({ display: 'grid' });
  });
});
