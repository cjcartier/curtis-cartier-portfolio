import { defineType } from 'sanity';

import heading from 'schemas/fields/heading';
import sectionField from 'schemas/fields/section';

const PortCo = defineType({
  name: 'portCo',
  title: 'Component: PortCo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    heading,
    {
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [{ name: 'brand', title: 'Brand', type: 'reference', to: [{ type: 'company' }] }],
    },
    sectionField,
  ],
});

export default PortCo;
