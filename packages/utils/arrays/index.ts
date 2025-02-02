/**
 * Checks if the provided value is a non-empty array.
 *
 * @param e - The value to check.
 * @returns `true` if `e` is a non-empty array, `false` otherwise.
 */
export const hasArrayValues = <T>(e: T): e is Exclude<T, undefined | null | never> =>
  Boolean(Array.isArray(e) && e.length > 0);

/**
 * Checks if there is any overlap between two arrays of strings.
 *
 * @param arr1 - The first array of strings to check.
 * @param arr2 - The second array of strings to check.
 * @returns `true` if there is at least one common element between `arr1` and `arr2`, `false` otherwise.
 */
export const hasArrayValueOverlap = (arr1: string[], arr2: string[]) => {
  const set2 = new Set(arr2);

  return arr1.some(item => set2.has(item));
};
