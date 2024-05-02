import defaultAccess from 'payload/utils/defaultAccess';

import type { CollectionConfig } from 'payload/dist/collections/config/types';

const Company: CollectionConfig = {
  slug: 'company',
  admin: {
    useAsTitle: 'companyName',
  },
  ...defaultAccess,
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
