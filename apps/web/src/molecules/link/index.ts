import { Selection, TypeFromSelection, q } from 'groqd';

import { constructUnionFromArray } from 'lib/groq';

export const internalLinkSelection = {
  link: q('reference')
    .deref()
    .grab$({ slug: ['seo.slug.current', q.string()] })
    .nullable(),
  blank: q.boolean().optional(),
  alt: q.string().optional(),
} satisfies Selection;

export const externalLinkSelection = {
  href: q.string().optional(),
  alt: q.string().optional(),
};

export const linkSelection = {
  type: constructUnionFromArray(['link', 'internalLink'] as const),
  label: q.string().optional(),
  internalLink: q('internalLink').grab$(internalLinkSelection).nullable(),
  link: q.object(externalLinkSelection).optional().nullable(),
} satisfies Selection;

export type LinkQuery = TypeFromSelection<typeof linkSelection>;
