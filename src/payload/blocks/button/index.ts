import link from 'payload/fields/link';

import type { Block } from 'payload/dist/fields/config/types';

const Button: Block = {
  slug: 'button',
  interfaceName: 'ButtonBlock',
  fields: [
    link({
      theme: ['fill', 'outline', 'text'],
      icon: true,
      overrides: { name: 'button' },
    }),
  ],
};

export default Button;
