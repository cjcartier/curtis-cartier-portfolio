import { defineField, defineType } from 'sanity';

import heading from 'schemas/fields/heading';
import image from 'schemas/fields/image';
import sectionField from 'schemas/fields/section';

const switchbackField = (number: number) =>
  defineField({
    name: `switchback${number}`,
    title: `Switchback ${number}`,
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'reversed',
        title: 'Reversed',
        type: 'boolean',
      },
      {
        name: 'liveSite',
        title: 'Live Site',
        type: 'string',
      },
      heading,
      {
        name: 'tools',
        title: 'Tools',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'tool' }],
          },
        ],
      },
      image(),
    ],
  });

const Switchback = defineType({
  name: 'switchback',
  title: 'Switchback',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    heading,
    switchbackField(1),
    switchbackField(2),
    sectionField,
  ],
});

export default Switchback;
