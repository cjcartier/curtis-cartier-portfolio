import { CaseIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { brandIds } from '@packages/ui/brands';

import { genValuesFromArray } from '@/utils/schemaFunctions';

const company = defineType({
  title: 'Company',
  name: 'company',
  type: 'document',
  icon: CaseIcon,
  fields: [
    defineField({
      title: 'Company Name',
      name: 'companyName',
      type: 'string',
      validation: Rule => Rule.required().error('You must provide a name for this company.'),
    }),
    defineField({
      title: 'Logo',
      name: 'logoId',
      type: 'string',
      options: {
        list: genValuesFromArray(brandIds),
        layout: 'dropdown',
      },
    }),
  ],
});

export default company;
