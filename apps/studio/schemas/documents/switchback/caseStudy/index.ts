import { defineType } from 'sanity';

import heading from 'schemas/fields/heading';
import image from 'schemas/fields/image';

const CaseStudySwitchBack = defineType({
  name: 'caseStudySwitchBack',
  title: 'Case Study Switchback',
  type: 'document',
  fields: [
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
      name: 'linkTo',
      title: 'Link To Live Site',
      type: 'url',
      validation: Rule =>
        Rule.required().uri({
          allowRelative: true,
          relativeOnly: false,
          scheme: ['http', 'https', 'mailto', 'tel', '/'],
        }),
    },
    image(),
  ],
});

export default CaseStudySwitchBack;
