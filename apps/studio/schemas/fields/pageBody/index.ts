import { defineField } from 'sanity';

import { components, componentsByType } from '@/schemas/components';

import { alphabetizeByType } from '@/utils/sort';

export const pageBody = defineField({
  name: 'body',
  title: 'Body',
  group: 'content',
  type: 'array',
  of: alphabetizeByType(components),
  validation: rule => rule.required(),
  options: {
    insertMenu: {
      filter: true,
      views: [
        {
          name: 'grid',
          previewImageUrl: schemaTypeName => `/static/componentPreviews/${schemaTypeName}.png`,
        },
        { name: 'list' },
      ],
      groups: componentsByType,
    },
  },
});
