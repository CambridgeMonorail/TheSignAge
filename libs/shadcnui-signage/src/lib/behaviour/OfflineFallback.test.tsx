import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { OfflineFallback } from './OfflineFallback';

describe('OfflineFallback', () => {
  it('shows children when healthy', () => {
    render(
      <OfflineFallback
        isHealthy={true}
        isOnline={true}
        fallback={<div>Fallback content</div>}
      >
        <div>Live content</div>
      </OfflineFallback>,
    );

    expect(screen.getByText('Live content')).toBeInTheDocument();
    expect(screen.queryByText('Fallback content')).not.toBeInTheDocument();
  });

  it('shows fallback when isHealthy is false', () => {
    render(
      <OfflineFallback
        isHealthy={false}
        isOnline={true}
        fallback={<div>Fallback content</div>}
      >
        <div>Live content</div>
      </OfflineFallback>,
    );

    expect(screen.getByText('Fallback content')).toBeInTheDocument();
    expect(screen.queryByText('Live content')).not.toBeInTheDocument();
  });

  it('shows fallback when isOnline is false', () => {
    render(
      <OfflineFallback
        isHealthy={true}
        isOnline={false}
        fallback={<div>Fallback content</div>}
      >
        <div>Live content</div>
      </OfflineFallback>,
    );

    expect(screen.getByText('Fallback content')).toBeInTheDocument();
    expect(screen.queryByText('Live content')).not.toBeInTheDocument();
  });

  it('defaults to showing children when isHealthy is undefined', () => {
    render(
      <OfflineFallback isOnline={true} fallback={<div>Fallback content</div>}>
        <div>Live content</div>
      </OfflineFallback>,
    );

    expect(screen.getByText('Live content')).toBeInTheDocument();
    expect(screen.queryByText('Fallback content')).not.toBeInTheDocument();
  });
});
