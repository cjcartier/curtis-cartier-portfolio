import { defineField } from 'sanity';

import { svgGradients } from 'atoms/gradients/svgGradient';

import { deKebabString } from 'utils/strings';

const paddingOptions = [
  {
    title: 'None',
    value: 'none',
  },
  {
    title: 'Small',
    value: 'small',
  },
  {
    title: 'Medium',
    value: 'medium',
  },
  {
    title: 'Large',
    value: 'large',
  },
  {
    title: 'XLarge',
    value: 'xLarge',
  },
];

export const sectionField = defineField({
  name: 'section',
  title: 'Section Props',
  type: 'object',
  fields: [
    defineField({
      name: 'paddingTop',
      title: 'Padding Top',
      type: 'string',
      options: { list: paddingOptions },
    }),
    defineField({
      name: 'paddingBottom',
      title: 'Padding Bottom',
      type: 'string',
      options: { list: paddingOptions },
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'string',
      options: {
        list: Object.keys(svgGradients).map(gradient => ({ title: deKebabString(gradient), value: gradient })),
      },
    }),
  ],
});

export default sectionField;
