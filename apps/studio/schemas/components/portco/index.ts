import heading from '@/schemas/fields/heading';
import definePageComponent from '@/schemas/definitions/component';

const portCo = definePageComponent({
  name: 'portCo',
  title: 'PortCo',
  fields: [
    heading,
    {
      name: 'brands',
      title: 'Brands',
      type: 'array',
      of: [
        {
          name: 'brand',
          title: 'Brand',
          type: 'reference',
          to: [{ type: 'company' }],
        },
      ],
    },
  ],
});

export default portCo;
