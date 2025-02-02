import { defineField, defineType } from 'sanity';

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
      of: [link],
      validation: rule => rule.max(6),
    }),
  ],
});

export default footer;
