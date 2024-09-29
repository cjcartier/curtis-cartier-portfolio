import { defineField } from 'sanity';

const formField = defineField({
  name: 'formFields',
  title: 'Form Fields',
  type: 'object',
  fields: [
    {
      name: 'required',
      title: 'Required',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'fieldName',
      title: 'Field Name',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'placeholder',
      title: 'Placeholder',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'fieldId',
      title: 'Field ID',
      type: 'slug',
      options: {
        // @ts-expect-error - fieldName does exist but option does not parse fields
        source: (doc, options) => options.parent.fieldName,
        maxLength: 200,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'inputType',
      title: 'Input Type',
      type: 'string',
      initialValue: 'text',
      options: {
        layout: 'dropdown',
        list: [
          { value: 'text', title: 'Text input' },
          { value: 'email', title: 'Email' },
          { value: 'phone', title: 'Phone number' },
          { value: 'textArea', title: 'Text area' },
          { value: 'file', title: 'File upload' },
        ],
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'split',
      title: 'Split',
      description: 'Split the field into two columns',
      type: 'boolean',
    },
  ],
});

export default formField;
