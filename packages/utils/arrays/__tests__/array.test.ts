import { describe, expect, it } from 'vitest';

import { hasArrayValueOverlap, hasArrayValues } from '..';

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

describe('hasArrayValueOverlap', () => {
  it('returns true for overlapping values between two arrays', () => {
    expect(hasArrayValueOverlap(['a', 'b', 'c'], ['c', 'd', 'e'])).toBe(true);
  });

  it('returns false when there are no overlapping values', () => {
    expect(hasArrayValueOverlap(['x', 'y', 'z'], ['a', 'b', 'c'])).toBe(false);
  });

  it('returns false when the first array is empty', () => {
    expect(hasArrayValueOverlap([], ['a', 'b', 'c'])).toBe(false);
  });

  it('returns false when the second array is empty', () => {
    expect(hasArrayValueOverlap(['a', 'b', 'c'], [])).toBe(false);
  });

  it('returns false when both arrays are empty', () => {
    expect(hasArrayValueOverlap([], [])).toBe(false);
  });

  it('returns true when both arrays contain the same single element', () => {
    expect(hasArrayValueOverlap(['a'], ['a'])).toBe(true);
  });

  it('returns false when the first array contains duplicates and the second does not overlap', () => {
    expect(hasArrayValueOverlap(['a', 'a', 'b'], ['c', 'd'])).toBe(false);
  });

  it('returns true when the first array contains duplicates and the second contains one of them', () => {
    expect(hasArrayValueOverlap(['a', 'a', 'b'], ['b', 'c'])).toBe(true);
  });
});
