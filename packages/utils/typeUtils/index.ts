export type valueof<T> = T[keyof T];

type ObjectEntriesReturn<T> = [keyof T, valueof<T>][];
type ObjectEntries = <T extends object>(object: T) => ObjectEntriesReturn<T>;
type ObjectKeys = <T extends object>(object: T) => (keyof T)[];

/**
 * Works like `Object.entries()` but returns accurate types
 * @param object Any JS object
 * @returns an array of tuples with each key and value of the object
 */
export const objectEntries: ObjectEntries = object => Object.entries(object) as ObjectEntriesReturn<typeof object>;

/**
 * Works like `Object.keys()` but returns accurate types
 * @param object Any JS object
 * @returns An array of the keys of the object
 */
export const objectKeys: ObjectKeys = object => Object.keys(object) as (keyof typeof object)[];

/**
 * Works like `Object.hasOwnProperty()` but infers type of the passed key
 * @param object Any JS object
 * @param potentialKey Any key that may or may not exist on the object
 * @returns boolean representing whether the key exists on the object
 */
export const keyExistsOnObject = <T extends Record<string, unknown>>(
  object: T,
  potentialKey: string | number | symbol,
): potentialKey is keyof T => object[potentialKey as keyof object] !== undefined;
