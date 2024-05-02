import link from 'payload/fields/link';

import Button from 'payload/blocks/button';

import adminsOrPublished from 'payload/access/adminsOrPublished';

import type { RowLabelArgs } from 'payload/dist/admin/components/forms/RowLabel/types';
import type { GlobalConfig } from 'payload/types';

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
      name: 'description',
      type: 'text',
    },
    {
      name: 'layout',
      label: 'Buttons',
      type: 'blocks',
      blocks: [Button],
      maxRows: 2,
      admin: {
        initCollapsed: true,
      },
    },
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
    {
      name: 'footerNote',
      type: 'text',
    },
  ],
};

export default Footer;
