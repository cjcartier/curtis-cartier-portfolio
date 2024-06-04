import sectionField from 'payload/fields/section';

import Heading from 'payload/blocks/heading';

import defaultAccess from 'payload/utils/defaultAccess';

import type { CollectionConfig } from 'payload/dist/collections/config/types';

const PortCo: CollectionConfig = {
  slug: 'portCo',
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
      admin: {
        initCollapsed: true,
      },
    },
    { name: 'brand', type: 'relationship', relationTo: 'company', hasMany: true },
    sectionField(),
  ],
};

export default PortCo;
