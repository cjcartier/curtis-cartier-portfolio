import { describe, expect, it } from 'vitest';

import { addTrailingSlash, forceHttps } from '../slugs';

describe('forceHttps', () => {
  it('should return the original URL if it is empty or only whitespace', () => {
    expect(forceHttps('')).toBe('');
    expect(forceHttps('   ')).toBe('   ');
  });

  it('should return the original URL if it starts with a slash', () => {
    expect(forceHttps('/path/to/resource')).toBe('/path/to/resource');
  });

  it('should convert a URL without a protocol to https', () => {
    expect(forceHttps('example.com')).toBe('https://example.com/');
  });

  it('should convert a URL with http protocol to https', () => {
    expect(forceHttps('http://example.com')).toBe('https://example.com/');
  });

  it('should convert a URL with https protocol to https', () => {
    expect(forceHttps('https://example.com')).toBe('https://example.com/');
  });

  it('should handle URLs with query parameters', () => {
    expect(forceHttps('example.com?query=param')).toBe('https://example.com/?query=param');
  });

  it('should handle URLs with fragments', () => {
    expect(forceHttps('example.com#fragment')).toBe('https://example.com/#fragment');
  });
});

describe('addTrailingSlash', () => {
  it('should add a trailing slash to a valid URL', () => {
    expect(addTrailingSlash('https://example.com')).toBe('https://example.com/');
  });

  it('should not add a trailing slash if it already exists', () => {
    expect(addTrailingSlash('https://example.com/')).toBe('https://example.com/');
  });

  it('should handle URLs without a scheme', () => {
    expect(addTrailingSlash('example.com')).toBe('https://example.com/');
  });

  it('should return the original input for an empty string', () => {
    expect(addTrailingSlash('')).toBe('');
  });

  it('should return the original input for a string with only whitespace', () => {
    expect(addTrailingSlash('   ')).toBe('   ');
  });

  it('should handle URLs with query parameters', () => {
    expect(addTrailingSlash('https://example.com?query=1')).toBe('https://example.com/?query=1');
  });

  it('should handle URLs with hashes', () => {
    expect(addTrailingSlash('https://example.com#section')).toBe('https://example.com/#section');
  });

  it('should handle malformed URLs gracefully', () => {
    expect(addTrailingSlash('not-a-valid-url')).toBe('https://not-a-valid-url/');
  });
});
