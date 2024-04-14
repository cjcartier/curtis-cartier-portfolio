import adminsOrPublished from '../access/adminsOrPublished';
import Button from '../blocks/button';
import link from '../fields/link';

import type { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types';
import type { GlobalConfig } from 'payload/types';

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: adminsOrPublished,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      maxRows: 6,
      fields: [
        link({
          theme: false,
        }),
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: ({ data }: RowLabelArgs) => data?.link?.label,
        },
      },
    },
    {
      name: 'buttons',
      label: 'Buttons',
      type: 'blocks',
      blocks: [Button],
      maxRows: 2,
      admin: {
        initCollapsed: true,
      },
    },
  ],
};

export default Header;
