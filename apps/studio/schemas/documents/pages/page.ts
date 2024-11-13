import { defineType } from 'sanity';

export const Pages = defineType({
  name: 'pages',
  title: 'Template: Pages',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'layout',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'conversionPanel' },
            { type: 'hero' },
            { type: 'portCo' },
            { type: 'switchback' },
            { type: 'testimonialComponent' },
            { type: 'toolsComponent' },
          ],
        },
      ],
      validation: Rule => Rule.required(),
    },
    { name: 'slug', type: 'slug', title: 'Slug', validation: Rule => Rule.required() },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'date',
    },
  ],
});

export default Pages;
