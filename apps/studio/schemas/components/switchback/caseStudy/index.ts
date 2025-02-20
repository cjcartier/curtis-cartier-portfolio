import { defineField } from 'sanity';

import defineImage from '@/schemas/definitions/image';
import heading from '@/schemas/fields/heading';
import externalLink from '@/schemas/fields/links/external';

const caseStudySwitchBack = defineField({
  name: 'caseStudySwitchBack',
  title: 'Case Study Switchback',
  type: 'object',
  fields: [
    heading,
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tool' }],
        },
      ],
    }),
    defineField({
      name: 'reversed',
      title: 'Reversed',
      type: 'boolean',
    }),
    externalLink,
    defineImage(
      {
        name: 'image',
        title: 'Image',
      },
      true,
    ),
  ],
  preview: {
    select: {
      title: 'heading.heading',
      subtitle: 'heading.subheading',
      media: 'image',
    },
  },
});

export default caseStudySwitchBack;
