import { describe, expectTypeOf, it } from 'vitest';

import { objectKeys } from '..';

describe('objectKeys', () => {
  it('should return union of keys of object', () => {
    const obj = { a: 1, b: 2, c: 3 };

    expectTypeOf(objectKeys(obj)).toEqualTypeOf<('a' | 'b' | 'c')[]>();
    expectTypeOf(objectKeys(obj)).not.toEqualTypeOf<('a' | 'b' | 'c' | 'd')[]>();
    expectTypeOf(objectKeys(obj)).toBeArray();
  });
});
