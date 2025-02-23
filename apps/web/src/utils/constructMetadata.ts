import { q } from 'groqd';

// import { addTrailingSlash } from '@packages/utils/slugs';

import type { Selection, TypeFromSelection } from 'groqd';
import type { Metadata } from 'next';

type SanityMetadata = Omit<TypeFromSelection<typeof seoSelection>, 'image'> & {
  // image?: TypeFromSelection<typeof seoSelection>['image'];
};

const constructMetadata = (metadata: SanityMetadata, slug: string): Metadata => {
  const title = metadata.pageTitle || 'I am Curtis | Frontend Web Engineer',
    description =
      metadata.pageDescription ||
      'The personal and portfolio site for me, Curtis Cartier. You will find my work, experience, and contact information here.',
    image = '/images/OG-Fallback.png',
    site = `https://iamcurtis.com`,
    url = `${site}/${slug || ''}`, // addTrailingSlash(`${site}/${slug || ''}`),
    index = !metadata.noIndex;

  return {
    title,
    description,
    openGraph: {
      images: [image],
      title,
      description,
      url,
      siteName: 'Knapsack',
    },
    robots: {
      index,
    },
    metadataBase: new URL(site),
    alternates: {
      canonical: url,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image,
    },
  };
};

export const seoSelection = {
  pageTitle: q.string().optional(),
  pageDescription: q.string().optional(),
  // image: getSanityImage('openGraphImage').nullable(),
  noIndex: q.boolean().optional(),
  noFollow: q.boolean().optional(),
} satisfies Selection;

export default constructMetadata;
