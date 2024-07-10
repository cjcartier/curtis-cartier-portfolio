import { defineField, defineType } from 'sanity';

import { buttonThemeField } from 'schemas/fields/link/buttonThemes';
import { linkIconField } from 'schemas/fields/link/iconOptions';

import type { LinkThemes } from 'schemas/fields/link/buttonThemes';

export type LinkType = {
  theme?: LinkThemes[] | false;
  hasIcon?: boolean;
  fieldAdmin?: { name: string; title: string };
};

const link = ({ theme, hasIcon, fieldAdmin }: LinkType = {}) => {
  const admin = fieldAdmin || { name: 'link', title: 'Link' };

  const linkField = defineField({
    ...admin,
    type: 'object',
    fields: [
      {
        name: 'label',
        title: 'Label',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
        validation: Rule =>
          Rule.required().uri({
            scheme: ['http', 'https', 'mailto', 'tel', '/'],
          }),
      },
    ],
  });

  hasIcon && linkField.fields.push(linkIconField);
  theme && linkField.fields.push(buttonThemeField(theme));

  return defineType(linkField);
};

export default link;
