import { describe, expect, it } from 'vitest';

import { hasObjectKeyValues } from '../objects';

describe('hasObjectKeyValues', () => {
  it('should return false for an empty object', () => {
    expect(hasObjectKeyValues({})).toBe(false);
  });

  it('should return false for an object with only null values', () => {
    expect(hasObjectKeyValues({ key1: null, key2: null })).toBe(false);
  });

  it('should return false for an object with only undefined values', () => {
    expect(hasObjectKeyValues({ key1: undefined, key2: undefined })).toBe(false);
  });

  it('should return true for an object with one defined value', () => {
    expect(hasObjectKeyValues({ key1: 1, key2: null })).toBe(true);
  });

  it('should return true for an object with mixed values', () => {
    expect(hasObjectKeyValues({ key1: null, key2: 'value' })).toBe(true);
  });

  it('should return true for an object with boolean values', () => {
    expect(hasObjectKeyValues({ key1: true, key2: false })).toBe(true);
  });

  it('should return true for an object with numeric values', () => {
    expect(hasObjectKeyValues({ key1: 0, key2: 5 })).toBe(true);
  });
});
