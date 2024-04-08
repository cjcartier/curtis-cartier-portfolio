/**
 * Checks if the provided value is a non-empty array.
 *
 * @param e - The value to check.
 * @returns `true` if `e` is a non-empty array, `false` otherwise.
 */
export const arrayValuesExist = (e: unknown): e is unknown[] => !!(e && Array.isArray(e) && e.length > 0);

/**
 * Generates an array of numbers within the specified range, with the given step size.
 *
 * @param start - The starting number of the range (inclusive).
 * @param stop - The ending number of the range (exclusive).
 * @param step - The step size between each number in the range.
 * @returns An array of numbers within the specified range, with the given step size.
 */
export const arrayRange = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, index) => start + index * step);
