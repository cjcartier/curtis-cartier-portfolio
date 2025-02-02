import { describe, expect, it } from 'vitest';

import { keyExistsOnObject, objectEntries, objectKeys } from '..';

describe('keyExistsOnObject', () => {
  it('should return true for a valid string key that exists on the object', () => {
    const obj = { a: 1, b: 2 };
    expect(keyExistsOnObject(obj, 'a')).toBe(true);
  });

  it('should return false for a valid string key that does not exist on the object', () => {
    const obj = { a: 1, b: 2 };
    expect(keyExistsOnObject(obj, 'c')).toBe(false);
  });

  it('should return true for a valid numeric key that exists on the object', () => {
    const obj = { 0: 'zero', 1: 'one' };
    expect(keyExistsOnObject(obj, 0)).toBe(true);
  });

  it('should return false for a valid numeric key that does not exist on the object', () => {
    const obj = { 0: 'zero', 1: 'one' };
    expect(keyExistsOnObject(obj, 2)).toBe(false);
  });

  it('should return true for a valid symbol key that exists on the object', () => {
    const sym = Symbol('unique');
    const obj = { [sym]: 'value' };
    expect(keyExistsOnObject(obj, sym)).toBe(true);
  });

  it('should return false for a valid symbol key that does not exist on the object', () => {
    const sym1 = Symbol('unique1');
    const sym2 = Symbol('unique2');
    const obj = { [sym1]: 'value' };
    expect(keyExistsOnObject(obj, sym2)).toBe(false);
  });

  it('should return false for an empty object', () => {
    const obj = {};
    expect(keyExistsOnObject(obj, 'anyKey')).toBe(false);
  });

  it('should return true for a key that is a number but is passed as a string', () => {
    const obj = { 1: 'one' };
    expect(keyExistsOnObject(obj, '1')).toBe(true);
  });
});

describe('objectKeys', () => {
  it('should return an empty array for an empty object', () => {
    const obj = {};
    expect(objectKeys(obj)).toEqual([]);
  });

  it('should return an array of keys for an object with multiple properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(objectKeys(obj)).toEqual(['a', 'b', 'c']);
  });

  it('should return keys in the correct order for an object with numeric keys', () => {
    const obj = { 2: 'two', 1: 'one', 3: 'three' };
    expect(objectKeys(obj)).toEqual(['1', '2', '3']);
  });

  it('should return keys for an object with mixed types of keys', () => {
    const obj = { a: 1, 2: 'two', b: true };
    expect(objectKeys(obj)).toEqual(['2', 'a', 'b']);
  });

  it('should return keys as strings even for numeric keys', () => {
    const obj = { 0: 'zero', 1: 'one' };
    expect(objectKeys(obj)).toEqual(['0', '1']);
  });
});

describe('objectEntries', () => {
  it('should return an empty array for an empty object', () => {
    const obj = {};
    expect(objectEntries(obj)).toEqual([]);
  });

  it('should return an array of key-value pairs for an object with multiple properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(objectEntries(obj)).toEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });

  it('should return key-value pairs in the correct order for an object with numeric keys', () => {
    const obj = { 2: 'two', 1: 'one', 3: 'three' };
    expect(objectEntries(obj)).toEqual([
      ['1', 'one'],
      ['2', 'two'],
      ['3', 'three'],
    ]);
  });

  it('should return key-value pairs for an object with mixed types of keys', () => {
    const obj = { a: 1, 2: 'two', b: true };
    expect(objectEntries(obj)).toEqual([
      ['2', 'two'],
      ['a', 1],
      ['b', true],
    ]);
  });

  it('should handle objects with nested objects', () => {
    const obj = { a: { nested: true }, b: 2 };
    expect(objectEntries(obj)).toEqual([
      ['a', { nested: true }],
      ['b', 2],
    ]);
  });

  it('should return key-value pairs for an object with array values', () => {
    const obj = { a: [1, 2, 3], b: 'string' };
    expect(objectEntries(obj)).toEqual([
      ['a', [1, 2, 3]],
      ['b', 'string'],
    ]);
  });
});
