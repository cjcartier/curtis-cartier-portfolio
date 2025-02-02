import { kebabToTitleCase } from '@packages/utils/strings';

/**
 * Generates an array of objects with `title` and `value` properties from a given array of strings.
 *
 * @param list - An array of strings to be converted to objects.
 * @returns An array of objects with `title` and `value` properties, where the `title` and `value` are both set to the corresponding string from the input array.
 */
export const genValuesFromArray = (list: string[]) => list.map(id => ({ title: kebabToTitleCase(id), value: id }));
