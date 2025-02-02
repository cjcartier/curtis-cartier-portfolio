import { defineField } from 'sanity';

import { genValuesFromArray } from '@/utils/schemaFunctions';

const sectionSizing = ['none', 'small', 'medium', 'large', 'xLarge'],
  svgGradients = ['home-curve'];

const componentLayoutFields = [
  defineField({
    name: 'padding',
    title: 'Vertical Padding',
    description: 'The amount of padding above and below the component, in pixels.',
    type: 'object',
    group: 'layout',
    options: {
      collapsible: false,
      columns: 2,
    },
    fields: [
      defineField({
        name: 'top',
        title: 'Top',
        type: 'string',
        options: {
          list: genValuesFromArray(sectionSizing),
        },
        initialValue: 'lg',
      }),
      defineField({
        name: 'bottom',
        title: 'Bottom',
        type: 'string',
        options: {
          list: genValuesFromArray(sectionSizing),
        },
        initialValue: 'lg',
      }),
    ],
  }),
  defineField({
    name: 'backgroundImage',
    title: 'Background Image',
    type: 'string',
    options: {
      list: genValuesFromArray(svgGradients),
    },
  }),
];

export default componentLayoutFields;
