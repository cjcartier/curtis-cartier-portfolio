import { logoIds } from 'atoms/logo/data';

import defaultAccess from 'payload/utils/defaultAccess';

import type { CollectionConfig } from 'payload/dist/collections/config/types';

const Tools: CollectionConfig = {
  slug: 'tools',
  admin: {
    useAsTitle: 'tool',
  },
  ...defaultAccess,
  fields: [
    { name: 'tool', type: 'text' },
    { name: 'company', type: 'relationship', relationTo: 'company' },
    { name: 'logoId', type: 'select', options: logoIds, unique: true },
    { name: 'description', type: 'richText' },
  ],
};

export default Tools;
