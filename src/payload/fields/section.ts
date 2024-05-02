import { svgGradients } from 'atoms/gradients/svgGradient';

import { deKebabString } from 'utils/strings';

import deepMerge from 'payload/utils/deepMerge';

import type { Field } from 'payload/dist/fields/config/types';

type Section = (overrides?: Partial<Field>) => Field;

const paddingOptions = [
  {
    label: 'None',
    value: 'none',
  },
  {
    label: 'Small',
    value: 'small',
  },
  {
    label: 'Medium',
    value: 'medium',
  },
  {
    label: 'Large',
    value: 'large',
  },
  {
    label: 'Xtra Large',
    value: 'xLarge',
  },
];

export const sectionField: Section = (overrides = {}) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: 'section',
      label: 'Section Props',
      type: 'group',
      admin: {
        position: 'sidebar',
      },
      fields: [
        {
          name: 'paddingTop',
          label: 'Padding Top',
          type: 'select',
          options: paddingOptions,
          defaultValue: 'medium',
        },
        {
          name: 'paddingBottom',
          label: 'Padding Bottom',
          type: 'select',
          options: paddingOptions,
          defaultValue: 'medium',
        },
        {
          name: 'backgroundImage',
          label: 'Background Image',
          type: 'select',
          options: Object.keys(svgGradients).map(gradient => ({ label: deKebabString(gradient), value: gradient })),
        },
      ],
    },
    overrides,
  );

export default sectionField;
