import { describe, it, expect } from 'vitest';
import { getClampClass } from './clamp';

describe('clamp utilities', () => {
  describe('getClampClass', () => {
    it('should return correct class for 1 line', () => {
      expect(getClampClass(1)).toBe('line-clamp-1');
    });

    it('should return correct class for 2 lines', () => {
      expect(getClampClass(2)).toBe('line-clamp-2');
    });

    it('should return correct class for 3 lines', () => {
      expect(getClampClass(3)).toBe('line-clamp-3');
    });

    it('should return correct class for 4 lines', () => {
      expect(getClampClass(4)).toBe('line-clamp-4');
    });

    it('should return correct class for 5 lines', () => {
      expect(getClampClass(5)).toBe('line-clamp-5');
    });

    it('should return correct class for 6 lines', () => {
      expect(getClampClass(6)).toBe('line-clamp-6');
    });
  });
});
