import { defineField, defineType } from 'sanity';

import { logoIds } from '@packages/ui/logos';

import { genValuesFromArray } from '@/utils/schemaFunctions';

const tool = defineType({
  name: 'tool',
  title: 'Tool',
  type: 'document',
  fields: [
    defineField({ name: 'tool', title: 'Tool', type: 'string' }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{ type: 'company' }],
    }),
    defineField({
      name: 'logoId',
      title: 'Logo',
      type: 'string',
      options: { list: genValuesFromArray(logoIds) },
    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});

export default tool;
