import { objectKeys } from 'utils/typeUtils';

/**
 * Checks if the provided content object has any keys and is not a number, null, or undefined.
 *
 * @param content - The object to check.
 * @returns `true` if the content object has any keys and is not a number, null, or undefined, `false` otherwise.
 */
const payloadContentExists = <T>(content: T): content is Exclude<T, number | undefined | null> =>
  typeof content !== 'number' && content && objectKeys(content).length > 0;

export default payloadContentExists;
