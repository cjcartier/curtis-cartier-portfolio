import { Block } from 'payload/types';

const Badge: Block = {
  slug: 'badge',
  interfaceName: 'Badge',
  fields: [
    {
      name: 'label',
      label: 'Label',
      type: 'text',
      required: true,
    },
    {
      name: 'variant',
      label: 'Variant',
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
