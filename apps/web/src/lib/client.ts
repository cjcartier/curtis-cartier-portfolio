import imageUrlBuilder from '@sanity/image-url';
import { makeSafeQueryRunner } from 'groqd';
import { createClient } from 'next-sanity';

import { apiVersion, dataset, projectId } from 'lib/env';

import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

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

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
