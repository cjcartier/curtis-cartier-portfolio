import { EditIcon, HashIcon, WrenchIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import { pageBody } from '@/schemas/fields/pageBody';
import { seo } from '@/schemas/fields/seo';

export const pages = defineType({
  name: 'pages',
  title: 'Pages',
  type: 'document',
  groups: [
    {
      name: 'content',
      title: 'Content',
      icon: EditIcon,
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
      icon: HashIcon,
    },
    {
      name: 'settings',
      title: 'Settings',
      icon: WrenchIcon,
    },
  ],
  fields: [
    seo(),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required(),
      group: 'content',
    }),
    pageBody,
  ],
});

export default pages;
