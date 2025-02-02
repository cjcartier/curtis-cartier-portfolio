import { CogIcon, EditIcon, ExpandIcon } from '@sanity/icons';
import { TbForms } from 'react-icons/tb';
import { defineField } from 'sanity';

import componentLayoutFields from '@/schemas/fields/shared/componentLayout';
import componentSettingFields from '@/schemas/fields/shared/componentSettings';

import type { ObjectDefinition } from 'sanity';

const definePageComponent = ({ groups = [], fields = [], components, ...props }: Omit<ObjectDefinition, 'type'>) =>
  defineField({
    ...props,
    type: 'object',
    components: {
      ...components,
    },
    groups: [
      {
        name: 'content',
        title: 'Content',
        icon: EditIcon,
        default: true,
      },
      {
        name: 'form',
        title: 'Form',
        icon: TbForms,
      },
      {
        name: 'layout',
        title: 'Layout',
        icon: ExpandIcon,
      },
      {
        name: 'settings',
        title: 'Settings',
        icon: CogIcon,
      },
      ...groups,
    ],
    fields: [
      ...fields.map(field => ({
        ...field,
        group: field.group ? field.group : 'content',
      })),
      ...componentLayoutFields,
      ...componentSettingFields,
    ],
  });

export default definePageComponent;
