import sectionField from 'payload/fields/section';

import Heading from 'payload/blocks/heading';

import defaultAccess from 'payload/utils/defaultAccess';

import type { CollectionConfig } from 'payload/dist/collections/config/types';

const Switchback: CollectionConfig = {
  slug: 'switchback',
  ...defaultAccess,
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'heading',
      type: 'blocks',
      blocks: [Heading],
      maxRows: 1,
      label: 'Switchback Section Heading',
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'switchbacks',
      type: 'array',
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: ({ data }) => data?.title || '',
        },
      },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'title', type: 'text', admin: { width: '75%' } },
            { name: 'reversed', type: 'checkbox', admin: { width: '25%' } },
          ],
        },
        {
          name: 'liveSite',
          type: 'text',
        },
        {
          name: 'content',
          type: 'blocks',
          blocks: [Heading],
          maxRows: 1,
          required: true,
          admin: {
            initCollapsed: true,
            width: '50%',
          },
        },
        {
          name: 'tools',
          type: 'relationship',
          relationTo: 'tools',
          hasMany: true,
        },
        {
          name: 'media',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    },
    sectionField(),
  ],
};

export default Switchback;
