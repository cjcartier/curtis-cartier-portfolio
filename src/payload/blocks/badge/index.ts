import type { Block } from 'payload/dist/fields/config/types';

const Badge: Block = {
  slug: 'badge',
  interfaceName: 'Badge',
  fields: [
    {
      name: 'label',
      type: 'text',
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: [
        {
          label: 'Primary',
          value: 'primary',
        },
      ],
    },
  ],
};

export default Badge;
