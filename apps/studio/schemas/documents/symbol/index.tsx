import { FaRegClone } from 'react-icons/fa6';
import { defineField, defineType } from 'sanity';

import { components, componentsByType } from '@/schemas/components';
import defineCallout from '@/schemas/definitions/callout';

import { alphabetizeByType } from '@/utils/sort';

const symbol = defineType({
  name: 'symbol',
  title: 'Symbol',
  type: 'document',
  icon: FaRegClone,
  fields: [
    defineCallout({
      heading: 'This is a Shared Component.',
      body: 'Shared components are reusable pieces of content that can be used across multiple pages. They are a great way to maintain consistency and reduce duplication.',
    }),
    defineField({
      name: 'name',
      title: 'Component Name',
      description: 'This is used to identify the component in Sanity.',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      description: 'These components will be displayed wherever this shared component is used.',
      type: 'array',
      of: alphabetizeByType(components),
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
    }),
  ],
  // components: {
  //   preview: PreviewReusableContent,
  // },
});

export default symbol;
