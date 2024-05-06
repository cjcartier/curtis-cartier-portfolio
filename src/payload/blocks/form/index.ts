import type { Block } from 'payload/dist/fields/config/types';

const form: Block = {
  slug: 'form',
  interfaceName: 'Form',
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

export default form;
