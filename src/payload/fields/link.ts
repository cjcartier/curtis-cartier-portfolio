import deepMerge from 'payload/utils/deepMerge';

import type { Field } from 'payload/dist/fields/config/types';

export const themeOptions = {
  fill: {
    label: 'Fill',
    value: 'fill',
  },
  outline: {
    label: 'Outline',
    value: 'outline',
  },
  text: {
    label: 'Text',
    value: 'text',
  },
};

export const buttonThemeField = (theme: LinkThemes[]): Field => {
  const options = theme.map(appearance => themeOptions[appearance]);

  return {
    name: 'theme',
    type: 'select',
    defaultValue: 'primary',
    options,
    admin: {
      description: 'Choose how the link should be rendered.',
      width: '50%',
    },
  };
};

const iconOptions = {
  none: {
    label: 'None',
    value: 'none',
  },
  mail: {
    label: 'Mail',
    value: 'mail',
  },
  gitHub: {
    label: 'GitHub',
    value: 'gitHub',
  },
  linkedIn: {
    label: 'LinkedIn',
    value: 'linkedIn',
  },
};

const linkIconOptions = Object.keys(iconOptions).map(iconOption => ({
  label: iconOptions[iconOption].label,
  value: iconOptions[iconOption].value,
}));

const linkIconField: Field = {
  name: 'icon',
  type: 'select',
  defaultValue: 'none',
  options: linkIconOptions,
  admin: {
    description: 'Choose to include an icon suffixing the button',
    width: '50%',
  },
};

type LinkThemes = keyof typeof themeOptions;

export type LinkType = (options?: {
  theme?: LinkThemes[] | false;
  disableLabel?: boolean;
  icon?: boolean;
  overrides?: Record<string, unknown>;
}) => Field;

const link: LinkType = ({ theme, disableLabel = false, icon, overrides = {} } = {}) => {
  const linkResult: Field = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            options: [
              {
                label: 'Custom URL',
                value: 'custom',
              },
              {
                label: 'Internal link',
                value: 'reference',
              },
            ],
            defaultValue: 'custom',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
          },
        ],
      },
    ],
  };

  const linkTypes: Field[] = [
    {
      name: 'reference',
      label: 'Document to link to',
      type: 'relationship',
      relationTo: ['users'],
      required: true,
      maxDepth: 1,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'reference',
      },
    },
    {
      name: 'link',
      label: 'Custom URL',
      type: 'text',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
    },
  ];

  if (!disableLabel) {
    linkTypes.map(linkType => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: '50%',
      },
    }));

    linkResult.fields.push({
      type: 'row',
      fields: [
        ...linkTypes,
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
          admin: {
            width: '50%',
          },
        },
      ],
    });
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes];
  }

  if (theme !== false) {
    linkResult.fields.push(buttonThemeField(theme));
  }

  icon && linkResult.fields.push(linkIconField);

  return deepMerge(linkResult, overrides);
};

export default link;
