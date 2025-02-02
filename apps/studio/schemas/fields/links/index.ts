import { LeaveIcon, LinkIcon } from '@sanity/icons';
import { RxButton } from 'react-icons/rx';
import { defineField } from 'sanity';

import externalLink from '@/schemas/fields/links/external';
import internalLink from '@/schemas/fields/links/internal';

const link = defineField({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: RxButton,
  fields: [
    defineField({
      name: 'type',
      title: 'Link Type',
      type: 'string',
      options: {
        list: [
          { title: 'Internal Link', value: 'internalLink' },
          { title: 'External Link', value: 'link' },
        ],
      },
      initialValue: 'internalLink',
    }),

    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      hidden: ({ parent }) => !parent?.type,
    }),
    // Link
    {
      ...externalLink,
      hidden: ({ parent }) => parent?.type !== 'link',
    },
    // Internal Link
    {
      ...internalLink,
      hidden: ({ parent }) => parent?.type !== 'internalLink',
    },
  ],
  preview: {
    select: {
      type: 'type',
      label: 'label',
      eLink: 'link.href',
      iLink: 'internalLink.reference.title',
    },
    prepare: ({ type, label, eLink, iLink }) => ({
      title: label,
      media: type === 'link' ? LeaveIcon : LinkIcon,
      subtitle: type === 'link' ? `External Link to: ${eLink}` : `Linked to: ${iLink}`,
    }),
  },
});

export default link;
