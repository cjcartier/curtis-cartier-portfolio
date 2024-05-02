import defaultAccess from 'payload/utils/defaultAccess';

import type { CollectionConfig } from 'payload/dist/collections/config/types';

const Person: CollectionConfig = {
  slug: 'person',
  admin: {
    useAsTitle: 'displayName',
  },
  ...defaultAccess,
  fields: [
    {
      name: 'displayName',
      type: 'text',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'firstName',
          type: 'text',
        },
        {
          name: 'lastName',
          type: 'text',
        },
      ],
    },
    {
      name: 'headshot',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'company',
      type: 'relationship',
      relationTo: 'company',
    },
    {
      name: 'position',
      type: 'text',
    },
  ],
};

export default Person;
