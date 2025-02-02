import { describe, expect, it } from 'vitest';

import { camelToTitleCase, kebabToTitleCase, sentenceToCamelCase, sentenceToKebabCase } from '..';

describe('sentenceToCamelCase', () => {
  it('should convert a simple sentence to camel case', () => {
    expect(sentenceToCamelCase('hello world')).toBe('helloWorld');
  });

  it('should handle leading and trailing spaces', () => {
    expect(sentenceToCamelCase('  hello world  ')).toBe('helloWorld');
  });

  it('should convert multiple spaces to a single space', () => {
    expect(sentenceToCamelCase('hello    world')).toBe('helloWorld');
  });

  it('should ignore non-alphanumeric characters', () => {
    expect(sentenceToCamelCase('hello! world?')).toBe('helloWorld');
  });

  it('should handle capitalized words correctly', () => {
    expect(sentenceToCamelCase('Hello World')).toBe('helloWorld');
  });

  it('should convert a sentence with numbers to camel case', () => {
    expect(sentenceToCamelCase('hello 2 world')).toBe('hello2World');
  });

  it('should return an empty string when input is empty', () => {
    expect(sentenceToCamelCase('')).toBe('');
  });

  it('should handle a single word input', () => {
    expect(sentenceToCamelCase('hello')).toBe('hello');
  });

  it('should convert a sentence with mixed case to camel case', () => {
    expect(sentenceToCamelCase('hELlo WoRLD')).toBe('helloWorld');
  });

  it('should handle special characters at the beginning and end', () => {
    expect(sentenceToCamelCase('!hello world!')).toBe('helloWorld');
  });
});

describe('sentenceToKebabCase', () => {
  it('should convert a sentence with mixed separators to kebab case', () => {
    expect(sentenceToKebabCase('hello_world hello-world')).toBe('hello-world-hello-world');
  });

  it('should convert a sentence with consecutive non-alphanumeric characters to kebab case', () => {
    expect(sentenceToKebabCase('hello!!!world')).toBe('hello-world');
  });

  it('should handle a sentence with only special characters', () => {
    expect(sentenceToKebabCase('!!!')).toBe('');
  });

  it('should convert a sentence with numbers and special characters to kebab case', () => {
    expect(sentenceToKebabCase('hello 2@world!')).toBe('hello-2-world');
  });

  it('should handle a sentence with multiple types of spaces', () => {
    expect(sentenceToKebabCase('hello\tworld\nnew')).toBe('hello-world-new');
  });

  it('should convert a sentence with a single capital letter to kebab case', () => {
    expect(sentenceToKebabCase('A')).toBe('a');
  });

  it('should return an empty string when input is only spaces', () => {
    expect(sentenceToKebabCase('     ')).toBe('');
  });
});

describe('camelToTitleCase', () => {
  it('should convert a camel case string to title case', () => {
    expect(camelToTitleCase('helloWorld')).toBe('Hello World');
  });

  it('should handle multiple camel case words', () => {
    expect(camelToTitleCase('myVariableName')).toBe('My Variable Name');
  });

  it('should handle a single uppercase letter', () => {
    expect(camelToTitleCase('A')).toBe('A');
  });

  it('should handle camel case with numbers', () => {
    expect(camelToTitleCase('user2Profile')).toBe('User2 Profile');
  });

  it('should return the same string if already in title case', () => {
    expect(camelToTitleCase('Hello World')).toBe('Hello World');
  });

  it('should return an empty string when input is empty', () => {
    expect(camelToTitleCase('')).toBe('');
  });

  it('should handle camel case with special characters', () => {
    expect(camelToTitleCase('myVar$Name')).toBe('My Var$ Name');
  });
});

describe('kebabToTitleCase', () => {
  it('should convert a kebab case string with multiple hyphens to title case', () => {
    expect(kebabToTitleCase('this-is-a-test')).toBe('This Is A Test');
  });

  it('should handle a kebab case string with leading and trailing hyphens', () => {
    expect(kebabToTitleCase('-leading-and-trailing-')).toBe('Leading And Trailing');
  });

  it('should return the same string if it is already in title case', () => {
    expect(kebabToTitleCase('Hello-World')).toBe('Hello World');
  });

  it('should convert a kebab case string with numbers to title case', () => {
    expect(kebabToTitleCase('user-2-profile')).toBe('User 2 Profile');
  });

  it('should return an empty string when input is empty', () => {
    expect(kebabToTitleCase('')).toBe('');
  });

  it('should handle a kebab case string with only one word', () => {
    expect(kebabToTitleCase('singleword')).toBe('Singleword');
  });

  it('should handle a kebab case string with special characters', () => {
    expect(kebabToTitleCase('my-var$-name')).toBe('My Var$ Name');
  });
});
