import sectionField from 'payload/fields/section';

import Heading from 'payload/blocks/heading';

import defaultAccess from 'payload/utils/defaultAccess';

import type { CollectionConfig } from 'payload/dist/collections/config/types';

const ConversionPanel: CollectionConfig = {
  slug: 'conversionPanel',
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
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      hasMany: false,
    },
    sectionField(),
  ],
};

export default ConversionPanel;
