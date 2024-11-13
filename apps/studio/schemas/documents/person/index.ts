import { defineType } from 'sanity';

import image from 'schemas/fields/image';

const Person = defineType({
  name: 'person',
  title: 'Entity: Person',
  type: 'document',
  fields: [
    {
      name: 'displayName',
      title: 'Display Name',
      type: 'string',
    },
    {
      name: 'fullName',
      type: 'object',
      options: { columns: 2 },
      fields: [
        {
          name: 'firstName',
          type: 'string',
        },
        {
          name: 'lastName',
          type: 'string',
        },
      ],
    },
    {
      name: 'position',
      type: 'string',
    },
    image({ fieldAdmin: { name: 'headshot', title: 'Headshot' } }),
    {
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{ type: 'company' }],
    },
  ],
});

export default Person;
