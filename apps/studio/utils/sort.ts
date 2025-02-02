/**
 * Sorts an array of objects with a `type` property in alphabetical order by the `type` property.
 * @param array - An array of objects with a `type` property and an optional `value` property.
 * @returns The sorted array.
 */
export const alphabetizeByType = (array: { type: string; value?: string }[]) =>
  array.sort((a, b) => a.type.localeCompare(b.type));

/**
 * Sorts an array of objects with a `title` property in alphabetical order by the `title` property.
 * @param array - An array of objects with a `title` property and a `value` property.
 * @returns The sorted array.
 */
export const alphabetizeByTitle = (array: { title: string; value: string }[]) =>
  array.sort((a, b) => a.title.localeCompare(b.title));
