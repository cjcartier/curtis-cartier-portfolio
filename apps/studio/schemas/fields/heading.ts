import { defineField } from 'sanity';

import link from 'schemas/fields/link';
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
          name: 'badge',
          title: 'Badge',
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
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
        link({
          theme: ['fill', 'outline', 'text'],
          hasIcon: true,
          fieldAdmin: { name: 'button', title: 'Button' },
        }),
      ],
    },
  ],
});

export default heading;
