import { defineField } from 'sanity';

import defineRichText from '@/schemas/definitions/richText';

import button from '../button';

import { genValuesFromArray } from '@/utils/schemaFunctions';

const heading = defineField({
  name: 'heading',
  title: 'Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'badges',
      title: 'Badges',
      type: 'array',
      of: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'doodle',
      title: 'Doodle',
      type: 'string',
      options: {
        list: genValuesFromArray(['hard', 'half-hard', 'squiggle']),
      },
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineRichText({
      name: 'subheading',
      title: 'Subheading',
      excludedTextStyles: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [button],
    }),
  ],
});

export default heading;
