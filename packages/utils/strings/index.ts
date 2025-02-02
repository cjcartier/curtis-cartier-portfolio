const wordSeparators = /[-_\\.+\s]+/g,
  notAlphaNumericOrSpace = /[^ a-zA-Z0-9]+/g,
  notAlphaNumericSpaceOrDash = /[^ a-zA-Z0-9-]/g,
  capitalizedFirstLetter = /[A-Z]+(?![a-z])|[A-Z]/g;

/**
 * Safely camelCases a string, taking into account acronyms, kebab-case, snake_case, and sentence casing as well as special characters
 * @param string
 * @returns A `string` in camelCase form
 */
export const sentenceToCamelCase = (string: string): string =>
  string
    .replace(wordSeparators, ' ')
    .replace(notAlphaNumericOrSpace, '')
    .toLowerCase()
    .replace(capitalizedFirstLetter, ($, ofs) => (ofs ? ' ' : '') + $.trim())
    .trim()
    .split(' ')
    .map((word, index) => (index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)))
    .join('');

/**
 * Safely kebab-cases a string, taking into account acronyms, camelCase, snake_case, and sentence casing, as well as special characters
 * @param string
 * @returns a kebab-cased string
 */
export const sentenceToKebabCase = (str: string) =>
  str
    .trim()
    .replace(wordSeparators, ' ')
    .replace(notAlphaNumericSpaceOrDash, ' ')
    .replace(capitalizedFirstLetter, ($, ofs) => (ofs ? '-' : '') + $.trim().toLowerCase())
    .trim()
    .split(' ')
    .join('-')
    .replace(/--+/g, '-');

/**
 * Converts a camelCase string to a title-cased string.
 *
 * @param str - The input string in camelCase.
 * @returns The input string converted to title case.
 */
export const camelToTitleCase = (str: string): string => {
  const spaced = str
    .replace(/([A-Z])/g, ' $1')
    .replace(/\s+/g, ' ')
    .trim();

  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
};

/**
 * Converts a kebab-case string to a title-cased string.
 *
 * @param str - The input string in kebab-case.
 * @returns The input string converted to title case.
 */
export const kebabToTitleCase = (str: string): string => {
  return str
    .split('-')
    .filter(Boolean)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
