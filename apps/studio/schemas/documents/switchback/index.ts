import { defineType } from 'sanity';

import heading from 'schemas/fields/heading';
import sectionField from 'schemas/fields/section';

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
    {
      name: 'switchbacks',
      title: 'Switchbacks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'caseStudySwitchBack' }],
        },
      ],
    },
    sectionField,
  ],
});

export default Switchback;
