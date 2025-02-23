import { defineField, defineType } from 'sanity';

import icon from '@/schemas/fields/icon';
import link from '@/schemas/fields/links';

export const footer = defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'mainLinks',
      title: 'Main Links',
      type: 'array',
      of: [link],
      validation: rule => rule.max(6),
    }),
    defineField({
      name: 'resourceLinks',
      title: 'Resource Links',
      type: 'array',
      of: [link],
      validation: rule => rule.max(6),
    }),
    defineField({
      name: 'contactLinks',
      title: 'Contact Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [link, icon],
        },
      ],
      validation: rule => rule.max(6),
    }),
  ],
  options: {
    // @ts-expect-error - Singleton is a valid option with a plugin
    singleton: true,
  },
});

export default footer;
