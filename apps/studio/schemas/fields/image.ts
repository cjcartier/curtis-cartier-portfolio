import { defineField } from 'sanity';

type ImageType = { fieldAdmin?: { name: string; title: string } };

const image = ({ fieldAdmin = { name: 'image', title: 'Image' } }: ImageType = {}) =>
  defineField({
    ...fieldAdmin,
    type: 'image',
    fields: [
      {
        name: 'alt',
        title: 'Alternative text',
        type: 'string',
        validation: Rule => Rule.required(),
      },
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
      },
      {
        name: 'featuredColor',
        title: 'Featured Color',
        type: 'string',
      },
    ],
  });

export default image;
