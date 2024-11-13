import { defineType } from 'sanity';

import formField from 'schemas/fields/formField';

const Form = defineType({
  name: 'form',
  title: 'Molecule: Form',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [formField],
    },
  ],
});

export default Form;
