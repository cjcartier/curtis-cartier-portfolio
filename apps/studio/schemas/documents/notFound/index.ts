import { EditIcon, HashIcon, WrenchIcon } from '@sanity/icons';
import { defineType } from 'sanity';

import { pageBody } from '@/schemas/fields/pageBody';
import { seo } from '@/schemas/fields/seo';

const notFound = defineType({
  name: 'notFound',
  title: 'Not Found',
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
  fields: [seo(true), pageBody],
  options: {
    // @ts-expect-error - Singleton is a valid option with a plugin
    singleton: true,
  },
});

export default notFound;
