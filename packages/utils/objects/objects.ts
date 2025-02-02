import { objectKeys } from '../typeUtils';

/**
 * Checks if an object has any non-null, non-undefined values.
 *
 * @param obj - The object to check.
 * @returns `true` if the object has any non-null, non-undefined values, `false` otherwise.
 */
export const hasObjectKeyValues = (obj: Record<string, unknown>) => {
  const keys = objectKeys(obj);

  if (keys.length === 0) return false;

  for (const key of keys) {
    if (obj[key] !== undefined && obj[key] !== null) {
      return true;
    }
  }

  return false;
};
