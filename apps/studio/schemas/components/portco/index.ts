import definePageComponent from '@/schemas/definitions/component';
import heading from '@/schemas/fields/heading';

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
  preview: {
    select: {
      title: 'heading.heading',
      subtitle: 'heading.subheading',
    },
  },
});

export default portCo;
