import { defineField, defineType } from 'sanity';

import button from '@/schemas/fields/button';
import link from '@/schemas/fields/links';

export const Header = defineType({
  name: 'header',
  title: 'Header',
  type: 'document',
  fields: [
    defineField({
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [link],
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      of: [button],
    }),
  ],
});

export default Header;
