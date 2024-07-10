import { defineType } from 'sanity';

import link from 'schemas/fields/link';

export const Footer = defineType({
  name: 'footer',
  title: 'Global: Footer',
  type: 'document',
  fields: [
    {
      name: 'mainLinks',
      title: 'Main Links',
      type: 'array',
      of: [
        link({
          theme: false,
        }),
      ],
      validation: Rule => Rule.max(6),
    },
    {
      name: 'resourceLinks',
      title: 'Resource Links',
      type: 'array',
      of: [
        link({
          theme: false,
        }),
      ],
      validation: Rule => Rule.max(6),
    },
    {
      name: 'contactLinks',
      title: 'Contact Links',
      type: 'array',
      of: [
        link({
          theme: false,
        }),
      ],
      validation: Rule => Rule.max(6),
    },
  ],
});

export default Footer;
