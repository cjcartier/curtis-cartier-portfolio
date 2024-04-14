import type { CollectionConfig } from 'payload/types';

const Company: CollectionConfig = {
  slug: 'company',
  admin: {
    useAsTitle: 'companyName',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
    },
    {
      name: 'logo',
      type: 'relationship',
      relationTo: 'media',
    },
  ],
};

export default Company;
