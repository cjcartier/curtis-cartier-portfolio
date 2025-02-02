import { defineField, defineType } from 'sanity';

import formField from '@/schemas/fields/formField';

const Form = defineType({
  name: 'form',
  title: 'Form',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [formField],
    }),
  ],
});

export default Form;
