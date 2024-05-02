import sectionField from 'payload/fields/section';

import Heading from 'payload/blocks/heading';

import defaultAccess from 'payload/utils/defaultAccess';

import type { CollectionConfig } from 'payload/dist/collections/config/types';

const Hero: CollectionConfig = {
  slug: 'hero',
  ...defaultAccess,
  admin: {
    useAsTitle: 'title',
    // defaultColumns: ['title', 'heading'],
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
      label: 'Hero Heading',
      admin: {
        initCollapsed: true,
      },
    },
    sectionField(),
  ],
};

export default Hero;
