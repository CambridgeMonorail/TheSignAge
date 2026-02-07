import { describe, it, expect } from 'vitest';
import { getResolution, getAspectRatio } from './resolution';

describe('resolution utilities', () => {
  describe('getResolution', () => {
    it('should return correct dimensions for 1080p', () => {
      const result = getResolution('1080p');
      expect(result).toEqual({ width: 1920, height: 1080 });
    });

    it('should return correct dimensions for 4k', () => {
      const result = getResolution('4k');
      expect(result).toEqual({ width: 3840, height: 2160 });
    });

    it('should return correct dimensions for portrait-1080p', () => {
      const result = getResolution('portrait-1080p');
      expect(result).toEqual({ width: 1080, height: 1920 });
    });
  });

  describe('getAspectRatio', () => {
    it('should return 16:9 aspect ratio for 1080p', () => {
      const result = getAspectRatio('1080p');
      expect(result).toEqual({ width: 16, height: 9 });
    });

    it('should return 16:9 aspect ratio for 4k', () => {
      const result = getAspectRatio('4k');
      expect(result).toEqual({ width: 16, height: 9 });
    });

    it('should return 9:16 aspect ratio for portrait-1080p', () => {
      const result = getAspectRatio('portrait-1080p');
      expect(result).toEqual({ width: 9, height: 16 });
    });
  });
});
