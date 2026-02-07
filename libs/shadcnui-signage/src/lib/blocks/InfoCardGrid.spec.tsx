import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { InfoCardGrid } from './InfoCardGrid';
import type { InfoCardItem } from '../types/signage.types';

const mockItems: InfoCardItem[] = [
  { title: 'Revenue', value: '$1.2M', description: 'Up 12% from last quarter', meta: 'Q4 2025' },
  { title: 'Users', value: '45.2K', description: 'Active users this month' },
  { title: 'Engagement', description: 'Overall platform engagement' },
];

describe('InfoCardGrid', () => {
  it('should render all items', () => {
    render(<InfoCardGrid items={mockItems} />);

    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('Engagement')).toBeInTheDocument();
  });

  it('should render item values when provided', () => {
    render(<InfoCardGrid items={mockItems} />);

    expect(screen.getByTestId('card-value-0')).toHaveTextContent('$1.2M');
    expect(screen.getByTestId('card-value-1')).toHaveTextContent('45.2K');
  });

  it('should render item descriptions when provided', () => {
    render(<InfoCardGrid items={mockItems} />);

    expect(screen.getByTestId('card-description-0')).toHaveTextContent('Up 12% from last quarter');
    expect(screen.getByTestId('card-description-1')).toHaveTextContent('Active users this month');
    expect(screen.getByTestId('card-description-2')).toHaveTextContent('Overall platform engagement');
  });

  it('should render item meta when provided', () => {
    render(<InfoCardGrid items={mockItems} />);

    expect(screen.getByTestId('card-meta-0')).toHaveTextContent('Q4 2025');
  });

  it('should apply default 3 columns', () => {
    render(<InfoCardGrid items={mockItems} />);

    const grid = screen.getByTestId('info-card-grid');
    expect(grid).toHaveAttribute('data-columns', '3');
    expect(grid).toHaveClass('grid-cols-3');
  });

  it('should apply 2 columns when specified', () => {
    render(<InfoCardGrid items={mockItems} columns={2} />);

    const grid = screen.getByTestId('info-card-grid');
    expect(grid).toHaveAttribute('data-columns', '2');
    expect(grid).toHaveClass('grid-cols-2');
  });

  it('should apply 4 columns when specified', () => {
    render(<InfoCardGrid items={mockItems} columns={4} />);

    const grid = screen.getByTestId('info-card-grid');
    expect(grid).toHaveAttribute('data-columns', '4');
    expect(grid).toHaveClass('grid-cols-4');
  });

  it('should apply comfortable density by default', () => {
    render(<InfoCardGrid items={mockItems} />);

    const grid = screen.getByTestId('info-card-grid');
    expect(grid).toHaveAttribute('data-density', 'comfortable');
    expect(grid).toHaveClass('gap-8', 'p-8');
  });

  it('should apply compact density when specified', () => {
    render(<InfoCardGrid items={mockItems} density="compact" />);

    const grid = screen.getByTestId('info-card-grid');
    expect(grid).toHaveAttribute('data-density', 'compact');
    expect(grid).toHaveClass('gap-4', 'p-4');
  });

  it('should not highlight any card by default', () => {
    render(<InfoCardGrid items={mockItems} />);

    expect(screen.getByTestId('info-card-0')).not.toHaveAttribute('data-highlighted');
    expect(screen.getByTestId('info-card-1')).not.toHaveAttribute('data-highlighted');
    expect(screen.getByTestId('info-card-2')).not.toHaveAttribute('data-highlighted');
  });

  it('should highlight the specified card', () => {
    render(<InfoCardGrid items={mockItems} highlightIndex={1} />);

    expect(screen.getByTestId('info-card-0')).not.toHaveAttribute('data-highlighted');
    expect(screen.getByTestId('info-card-1')).toHaveAttribute('data-highlighted');
    expect(screen.getByTestId('info-card-2')).not.toHaveAttribute('data-highlighted');
  });

  it('should apply highlight styles without breaking layout', () => {
    render(<InfoCardGrid items={mockItems} highlightIndex={0} />);

    const highlightedCard = screen.getByTestId('info-card-0');
    expect(highlightedCard).toHaveClass('ring-2', 'ring-primary', 'ring-offset-2', 'shadow-lg');
  });

  it('should apply custom className', () => {
    render(<InfoCardGrid items={mockItems} className="custom-grid" />);

    const grid = screen.getByTestId('info-card-grid');
    expect(grid).toHaveClass('custom-grid');
  });

  it('should apply text clamping classes', () => {
    const { container } = render(<InfoCardGrid items={mockItems} />);

    // Title should be clamped to 2 lines
    const titles = container.querySelectorAll('[class*="line-clamp-2"]');
    expect(titles.length).toBeGreaterThan(0);

    // Description should be clamped to 3 lines
    const descriptions = container.querySelectorAll('[class*="line-clamp-3"]');
    expect(descriptions.length).toBeGreaterThan(0);

    // Meta should be clamped to 1 line
    const meta = container.querySelectorAll('[class*="line-clamp-1"]');
    expect(meta.length).toBeGreaterThan(0);
  });

  it('should handle empty items array', () => {
    render(<InfoCardGrid items={[]} />);

    const grid = screen.getByTestId('info-card-grid');
    expect(grid).toBeInTheDocument();
    expect(grid.children).toHaveLength(0);
  });

  it('should handle single item', () => {
    const singleItem: InfoCardItem[] = [{ title: 'Single Card' }];
    render(<InfoCardGrid items={singleItem} />);

    expect(screen.getByTestId('info-card-0')).toBeInTheDocument();
    expect(screen.getByText('Single Card')).toBeInTheDocument();
  });

  it('should handle items without optional fields', () => {
    const minimalItems: InfoCardItem[] = [
      { title: 'Title Only 1' },
      { title: 'Title Only 2' },
    ];
    render(<InfoCardGrid items={minimalItems} />);

    expect(screen.getByText('Title Only 1')).toBeInTheDocument();
    expect(screen.getByText('Title Only 2')).toBeInTheDocument();
  });
});
