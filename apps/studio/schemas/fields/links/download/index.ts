import { DownloadIcon } from '@sanity/icons';
import { defineField } from 'sanity';

const downloadLink = defineField({
  name: 'downloadLink',
  title: 'Download Link',
  icon: DownloadIcon,
  type: 'object',
  fields: [
    {
      name: 'file',
      title: 'File',
      type: 'file',
      validation: Rule => Rule.required(),
    },
  ],
});

export default downloadLink;
