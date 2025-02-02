import { ImageIcon } from '@sanity/icons';
import { BiSolidUserDetail } from 'react-icons/bi';
import { defineField, defineType } from 'sanity';

import defineImage from '@/schemas/definitions/image';
import icon from '@/schemas/fields/icon';
import link from '@/schemas/fields/links';

const siteSettings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {
      name: 'general',
      title: 'General',
      icon: BiSolidUserDetail,
      default: true,
    },
    {
      name: 'logos',
      title: 'Logos',
      icon: ImageIcon,
    },
  ],
  fields: [
    defineField({ name: 'siteName', title: 'Site Name', type: 'string', group: 'general' }),
    defineImage({ name: 'logo', title: 'Logo', group: 'logos' }),
    defineImage({ name: 'logoMark', title: 'Logo Mark', group: 'logos' }),
    defineImage({ name: 'logoText', title: 'Logo Text', group: 'logos' }),
    defineField({
      name: 'socials',
      title: 'Socials',
      type: 'array',
      of: [
        defineField({
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [icon, link],
          preview: {
            select: { title: 'link.label' },
            prepare: ({ title }: Record<string, string>) => ({
              title,
            }),
          },
        }),
      ],
      group: 'general',
    }),
  ],
  options: {
    // @ts-expect-error - Singleton is a valid option with a plugin
    singleton: true,
  },
});

export default siteSettings;
