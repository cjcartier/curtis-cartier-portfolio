import { makeSafeQueryRunner } from 'groqd';
import { apiVersion, dataset, projectId } from 'lib/env';
import { createClient } from 'next-sanity';

import type { QueryParams } from 'sanity';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
});

export const runQuery = makeSafeQueryRunner((query, params: Record<string, unknown> = {}) =>
  client.fetch(query, params),
);
export const sanityFetch = async <T>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}): Promise<T> =>
  client.fetch(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
  });

export default client;
