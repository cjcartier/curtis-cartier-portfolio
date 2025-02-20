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
      name: 'formId',
      title: 'Form ID',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'variation',
      title: 'Variation',
      type: 'string',
      options: {
        list: [
          { title: 'General', value: 'general' },
          { title: 'Single Line', value: 'singleLine' },
        ],
      },
      initialValue: 'default',
    }),
    defineField({
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [formField],
      deprecated: { reason: 'Moving to use Hubspot Form API' },
    }),
  ],
});

export default Form;
