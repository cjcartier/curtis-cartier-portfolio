import { defineField } from 'sanity';

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
            allowRelative: true,
            relativeOnly: false,
            scheme: ['http', 'https', 'mailto', 'tel', '/'],
          }),
      },
    ],
  });

  if (hasIcon) {
    linkField.fields.push(linkIconField);
  }

  if (theme) {
    linkField.fields.push(buttonThemeField(theme));
  }

  return defineField(linkField);
};

export default link;
