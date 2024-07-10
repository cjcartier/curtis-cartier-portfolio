import { defineType } from 'sanity';

import heading from 'schemas/fields/heading';
import sectionField from 'schemas/fields/section';

const PortCo = defineType({
  name: 'portCo',
  title: 'Portfolio Company',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    heading,
    { name: 'brand', type: 'reference', to: [{ type: 'company' }] },
    sectionField,
  ],
});

export default PortCo;
