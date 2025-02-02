import { defineField } from 'sanity';

import { buttonVariations } from '@packages/ui/button';

import icon from '@/schemas/fields/icon';
import link from '@/schemas/fields/links';

import { genValuesFromArray } from '@/utils/schemaFunctions';

const button = defineField({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    link,
    defineField({
      name: 'hierarchy',
      title: 'Hierarchy',
      type: 'string',
      options: {
        list: genValuesFromArray(buttonVariations),
        layout: 'radio',
      },
      initialValue: 'primary',
    }),
    icon,
    defineField({
      name: 'iconPosition',
      title: 'Icon Position',
      type: 'string',
      options: {
        list: genValuesFromArray(['start', 'end']),
      },
      initialValue: 'end',
    }),
  ],
  preview: {
    select: {
      title: 'link.label',
      hierarchy: 'hierarchy',
    },
    prepare: ({ title, hierarchy }: Record<string, string>) => ({
      title: title || 'Button',
      subtitle: `Hierarchy: ${hierarchy}`,
    }),
  },
});

export default button;
