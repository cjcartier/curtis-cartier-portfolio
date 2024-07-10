import { defineType } from 'sanity';

import link from 'schemas/fields/link';

const Button = defineType({
  title: 'Molecule: Button',
  name: 'button',
  type: 'document',
  fields: [
    link({
      theme: ['fill', 'outline', 'text'],
      hasIcon: true,
      fieldAdmin: { name: 'button', title: 'Button' },
    }),
  ],
});

export default Button;
