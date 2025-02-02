import { LaunchIcon } from '@sanity/icons';
import { defineField } from 'sanity';

const externalLink = defineField({
  name: 'link',
  title: 'External Link',
  icon: LaunchIcon,
  type: 'object',
  options: {
    collapsed: false,
  },
  fields: [
    defineField({
      name: 'href',
      title: 'URL',
      type: 'url',
      validation: Rule =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
          // This allows relative URLs, including anchor links
          allowRelative: true,
        }),
    }),
    defineField({
      name: 'alt',
      title: 'Alt text',
      description: 'Descriptive text for screen readers',
      type: 'string',
    }),
  ],
});

export default externalLink;
