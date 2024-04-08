/**
 * Converts a string to a kebab-case string.
 *
 * @param string - The input string to be converted.
 * @returns The input string converted to lowercase with spaces replaced by hyphens.
 */
export const toKebabCase = (string: string) =>
  string
    .toLowerCase()
    .replace(/[^A-Za-z0-9\- ]|(\s+-+)/g, '')
    .trim()
    .replace(/\s+/g, '-');

/**
 * @param string any string, including special characters
 * @returns a string with the first character of each word capitalized
 */
export const toTitleCase = (string: string) =>
  string.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());

/**
 * @param string any string, including special characters
 * @returns a string with the first character of each word capitalized and the `.` modified to a space
 */
export const tokenToSentence = (string: string) => toTitleCase(string.replace('.', ' '));

/**
 * @param string any string, including special characters
 * @returns a string with the first character is capitalized capitalized
 */
export const capitalize = (string?: string) => (string ? string.charAt(0).toUpperCase() + string.slice(1) : '');

/**
 * @param string any string, including special characters
 * @returns a string with the first character of each word capitalized
 */
export const deKebabString = (id: string) => id.replace(/(^|\/|-)(\S)/g, s => s.toUpperCase()).replaceAll('-', ' ');

/**
 * @param string any string, including special characters
 * @returns a string without spaces or punctuation and with capitalized words.
 */
export const toCamelCase = (string: string) =>
  string.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_m, chr) => chr.toUpperCase());

/**
 * @param string any string, including special characters
 * @returns an all lowercase string with capital letters replaced by hyphens and lowercase
 */
export const camelToKebab = (string: string) => string.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
