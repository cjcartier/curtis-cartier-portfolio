export type valueof<T> = T[keyof T];

type Join<S1, S2> = S1 extends string ? (S2 extends string ? `${S1}.${S2}` : never) : never;

export type Paths<T> = {
  [K in keyof T]: T[K] extends Record<string, unknown> ? Join<K, Paths<T[K]>> : K;
}[keyof T];

type ObjectEntriesReturn<T> = [keyof T, valueof<T>][];
type ObjectEntries = <T extends object>(object: T) => ObjectEntriesReturn<T>;
type ObjectKeys = <T extends object>(object: T) => (keyof T)[];

/**
 * Returns an array of key-value pairs for the properties of the given object.
 * @param object - The object to get the entries for.
 * @returns An array of key-value pairs for the object.
 */
export const objectEntries: ObjectEntries = object => Object.entries(object) as ObjectEntriesReturn<typeof object>;

/**
 * Returns an array of the keys of the given object.
 * @param object - The object to get the keys for.
 * @returns An array of the keys of the object.
 */
export const objectKeys: ObjectKeys = object => Object.keys(object) as (keyof typeof object)[];

/**
 * Checks if a key exists on an object.
 * @param object - The object to check.
 * @returns `true` if the key exists on the object, `false` otherwise.
 */
export const keyExistsOnObject = <T extends Record<string, unknown>>(
  object: T,
  potentialKey: string | number | symbol,
): potentialKey is keyof T => object[potentialKey as keyof object] !== undefined;

export type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
  ? ElementType
  : never;
