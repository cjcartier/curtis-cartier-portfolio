import sectionField from 'payload/fields/section';

import Heading from 'payload/blocks/heading';

import defaultAccess from 'payload/utils/defaultAccess';

import type { CollectionConfig } from 'payload/dist/collections/config/types';

const ToolsComponent: CollectionConfig = {
  slug: 'toolsComponent',
  admin: {
    useAsTitle: 'title',
  },
  ...defaultAccess,
  fields: [
    { name: 'title', type: 'text' },
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
      name: 'tools',
      type: 'relationship',
      relationTo: 'tools',
      hasMany: true,
    },
    sectionField(),
  ],
};

export default ToolsComponent;
