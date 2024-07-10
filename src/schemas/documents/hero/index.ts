import { defineType } from 'sanity';

import heading from 'schemas/fields/heading';
import sectionField from 'schemas/fields/section';

const Hero = defineType({
  title: 'Component: Hero',
  name: 'hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    heading,
    sectionField,
  ],
});

export default Hero;
