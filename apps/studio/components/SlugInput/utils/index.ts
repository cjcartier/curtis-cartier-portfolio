import { useState } from 'react';
import { useDocumentPane } from 'sanity/structure';

import type { ObjectSchemaType, Slug } from 'sanity';

interface PrefixedSlugInputOptions {
  slugPrefix?: string;
  includeSlugPrefixInStoredValue?: boolean;
}

export const getSlugPrefix = (schemaType: ObjectSchemaType): PrefixedSlugInputOptions =>
  schemaType.fields.find(field => field.name === 'seo')?.type.options;

export const generateDisplayedSlug = (slugPrefix?: string) => (slugPrefix ? `/${slugPrefix}/` : '/');

export const useEditableSlug = (value?: Slug) => {
  const { schemaType } = useDocumentPane(),
    storedSlugCurrent = value?.current,
    { slugPrefix, includeSlugPrefixInStoredValue = false } = getSlugPrefix(schemaType),
    editablePortion = storedSlugCurrent?.replace(`${slugPrefix}/`, ''),
    displayedPrefix = generateDisplayedSlug(slugPrefix);

  return {
    state: useState(editablePortion),
    options: { slugPrefix, includeSlugPrefixInStoredValue, editablePortion, displayedPrefix },
  };
};
