import heading from '@/schemas/fields/heading';
import definePageComponent from '@/schemas/definitions/component';

const tools = definePageComponent({
  name: 'tools',
  title: 'Tools',
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
  ],
});

export default tools;
