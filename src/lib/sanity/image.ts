import createImageUrlBuilder from '@sanity/image-url';

import { dataset, projectId } from 'lib/sanity/env';

import type { Image } from 'sanity';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: Image) => imageBuilder?.image(source).auto('format').fit('max').url();

export default urlForImage;
