import { defineField } from 'sanity';

import { generateValueListFromArray } from 'schemas/utils/schemaFunctions';

const heading = defineField({
  name: 'heading',
  title: 'Heading',
  type: 'object',
  fields: [
    {
      name: 'badges',
      title: 'Badges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'badge',
              type: 'reference',
              to: [{ type: 'badge' }],
            },
          ],
        },
      ],
    },
    {
      name: 'doodle',
      title: 'Doodle',
      type: 'string',
      options: { list: generateValueListFromArray(['hard', 'half-hard', 'squiggle']) },
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: rule => rule.required(),
    },
    {
      name: 'subheading',
      title: 'Subheading',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'button',
              title: 'Button',
              type: 'reference',
              to: [{ type: 'button' }],
            },
          ],
        },
      ],
    },
  ],
});

export default heading;
