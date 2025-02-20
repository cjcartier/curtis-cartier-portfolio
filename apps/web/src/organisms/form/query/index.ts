import { q } from 'groqd';

import { constructUnionFromArray } from 'lib/groq';

import type { Selection, TypeFromSelection } from 'groqd';

export type HubspotFormQuery = TypeFromSelection<typeof hubspotFormSelection>;

export const hubspotFormSelection = {
  formId: q.string().optional(),
  variation: constructUnionFromArray(['general', 'singleLine'] as const),
  _type: q.string().optional(),
} satisfies Selection;
