import { defineType } from 'sanity';

import link from 'schemas/fields/link';

export const Header = defineType({
  name: 'header',
  title: 'Global: Header',
  type: 'document',
  fields: [
    {
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            link({
              theme: false,
            }),
          ],
        },
      ],
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [
        link({
          theme: ['fill', 'outline', 'text'],
          hasIcon: true,
          fieldAdmin: { name: 'button', title: 'Button' },
        }),
      ],
    },
  ],
});

export default Header;
