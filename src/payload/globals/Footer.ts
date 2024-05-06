import link from 'payload/fields/link';

import adminsOrPublished from 'payload/access/adminsOrPublished';

import type { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types';
import type { GlobalConfig } from 'payload/dist/globals/config/types';

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: adminsOrPublished,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'mainLinks',
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
          RowLabel: ({ data, index }: RowLabelArgs) =>
            data?.link?.label || `Menu Link ${String(index).padStart(2, '0')}`,
        },
      },
    },
    {
      name: 'resourceLinks',
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
          RowLabel: ({ data, index }: RowLabelArgs) =>
            data?.link?.label || `Menu Link ${String(index).padStart(2, '0')}`,
        },
      },
    },
    {
      name: 'contactLinks',
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
          RowLabel: ({ data, index }: RowLabelArgs) =>
            data?.link?.label || `Contact Link ${String(index).padStart(2, '0')}`,
        },
      },
    },
  ],
};

export default Footer;
