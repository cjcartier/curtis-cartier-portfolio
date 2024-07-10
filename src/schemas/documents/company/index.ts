import { defineType } from 'sanity';

import { generateValueListFromArray } from 'schemas/utils/schemaFunctions';

import { brandIds } from 'atoms/brands/data';

const Company = defineType({
  title: 'Entity: Company',
  name: 'company',
  type: 'document',
  fields: [
    {
      title: 'Company Name',
      name: 'companyName',
      type: 'string',
    },
    {
      title: 'Logo',
      name: 'logoId',
      type: 'string',
      options: { list: generateValueListFromArray(brandIds), layout: 'dropdown' },
    },
  ],
});

export default Company;
