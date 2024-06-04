import { brandIds } from 'atoms/brands/data';

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
      name: 'logoId',
      type: 'select',
      options: brandIds,
    },
  ],
};

export default Company;
