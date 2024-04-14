import type { CollectionConfig } from 'payload/types';

const Person: CollectionConfig = {
  slug: 'person',
  admin: {
    useAsTitle: 'fullName',
  },
  access: {
    read: () => true,
  },
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
