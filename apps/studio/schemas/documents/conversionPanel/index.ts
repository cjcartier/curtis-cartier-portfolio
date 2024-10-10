import { defineType } from 'sanity';

import heading from 'schemas/fields/heading';
import sectionField from 'schemas/fields/section';

const ConversionPanel = defineType({
  title: 'Component: Conversion Panel',
  name: 'conversionPanel',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    heading,
    {
      name: 'form',
      title: 'Form',
      type: 'reference',
      to: [{ type: 'form' }],
    },
    sectionField,
  ],
});

export default ConversionPanel;
