import { describe, expect, it } from 'vitest';

import { arrayRange, hasArrayValues } from 'utils/arrays';

describe('hasArrayValues', () => {
  it('returns true for array with values', () => {
    expect(hasArrayValues([1, 2, 3])).toBe(true);
  });

  it('returns false for empty array', () => {
    expect(hasArrayValues([])).toBe(false);
  });

  it('returns false for non-array value', () => {
    expect(hasArrayValues('hello')).toBe(false);
  });
});

describe('arrayRange', () => {
  it('should generate an array of numbers from start to stop in steps', () => {
    const result = arrayRange(1, 5, 1);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle negative step', () => {
    const result = arrayRange(5, 1, -1);
    expect(result).toEqual([5, 4, 3, 2, 1]);
  });

  it('should handle float step', () => {
    const result = arrayRange(1, 4, 0.5);
    expect(result).toEqual([1, 1.5, 2, 2.5, 3, 3.5, 4]);
  });

  it('should throw error if step is 0', () => {
    expect(() => {
      arrayRange(1, 5, 0);
    }).toThrow();
  });
});
