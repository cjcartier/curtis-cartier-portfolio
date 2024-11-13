import { describe, expect, it } from 'vitest';

import {
  camelToKebab,
  capitalize,
  deKebabString,
  toCamelCase,
  toKebabCase,
  toTitleCase,
  tokenToSentence,
} from 'utils/strings';

describe('toKebabCase', () => {
  it('converts string to lowercase with hyphens', () => {
    expect(toKebabCase('Hello World')).toBe('hello-world');
  });

  it('removes non-alphanumeric characters', () => {
    expect(toKebabCase('Hello World!')).toBe('hello-world');
  });

  it('trims whitespace', () => {
    expect(toKebabCase(' Hello World ')).toBe('hello-world');
  });
});

describe('toTitleCase', () => {
  it('capitalizes the first letter of each word', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
  });

  it('handles strings with punctuation', () => {
    expect(toTitleCase('hello, world!')).toBe('Hello, World!');
  });
});

describe('tokenToSentence', () => {
  it('capitalizes first letter of each word', () => {
    expect(tokenToSentence('hello.world')).toBe('Hello world');
  });

  it('replaces periods with spaces', () => {
    expect(tokenToSentence('hello.world.foo')).toBe('Hello world foo');
  });
});

describe('capitalize', () => {
  it('capitalizes the first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  it('handles empty string', () => {
    expect(capitalize('')).toBe('');
  });
});

describe('deKebabString', () => {
  it('capitalizes words split by hyphens', () => {
    expect(deKebabString('foo-bar')).toBe('Foo Bar');
  });

  it('capitalizes words with slashes', () => {
    expect(deKebabString('foo/bar-baz')).toBe('Foo Bar Baz');
  });
});

describe('toCamelCase', () => {
  it('lowercases and capitalizes words', () => {
    expect(toCamelCase('Foo Bar')).toBe('fooBar');
  });

  it('removes non-alphanumeric characters', () => {
    expect(toCamelCase('Foo!@# Bar')).toBe('fooBar');
  });
});

describe('camelToKebab', () => {
  it('converts camelCase to kebab-case', () => {
    expect(camelToKebab('fooBar')).toBe('foo-bar');
  });

  it('lowercases characters', () => {
    expect(camelToKebab('FooBar')).toBe('foo-bar');
  });
});
