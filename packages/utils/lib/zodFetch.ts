import { z } from 'zod'; // Can also be imported from `groqd`

/**
 * Fetches data from a URL and parses the response using a Zod schema.
 *
 * @param url - The URL to fetch data from.
 * @param responseSchema - A Zod schema that defines the expected response structure.
 * @returns A Promise that resolves to the parsed response data.
 * @throws {Error} If the response data fails to validate against the provided schema.
 */
const zodFetch = async <TResponseSchema extends z.Schema>(
  url: string,
  responseSchema: TResponseSchema,
): Promise<z.infer<TResponseSchema>> => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();

    return responseSchema.parse(json);
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(`Schema validation failed: ${JSON.stringify(error.issues)}`);
    }
    throw new Error(error instanceof Error ? error.message : 'Failed to fetch data');
  }
};

export default zodFetch;
