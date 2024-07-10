import { defineType } from 'sanity';

import { generateValueListFromArray } from 'schemas/utils/schemaFunctions';

import { logoIds } from 'atoms/logo/data';

const Tools = defineType({
  name: 'tool',
  title: 'Entity: Tool',
  type: 'document',
  fields: [
    { name: 'tool', title: 'Tool', type: 'string' },
    { name: 'company', title: 'Company', type: 'reference', to: [{ type: 'company' }] },
    { name: 'logoId', title: 'Logo', type: 'string', options: { list: generateValueListFromArray(logoIds) } },
    { name: 'description', title: 'description', type: 'array', of: [{ type: 'block' }] },
  ],
});

export default Tools;
