import { SiConvertio } from 'react-icons/si';

import heading from '@/schemas/fields/heading';
import definePageComponent from '@/schemas/definitions/component';
import { defineField } from 'sanity';

const conversionPanel = definePageComponent({
  name: 'conversionPanel',
  title: 'Conversion Panel',
  icon: SiConvertio,
  fields: [
    heading,
    defineField({
      name: 'form',
      title: 'Form',
      type: 'reference',
      to: [{ type: 'form' }],
    }),
  ],
});

export default conversionPanel;
