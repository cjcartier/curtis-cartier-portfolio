import deepMerge from '../utils/deepMerge';

import type { Field } from 'payload/types';

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
      ],
    },
    overrides,
  );

export default sectionField;
