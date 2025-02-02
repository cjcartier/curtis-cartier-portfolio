import { defineField } from 'sanity';

import SlugInput from '@/components/SlugInput';

export const seo = (removeSlug?: boolean) =>
  defineField({
    name: 'seo',
    title: 'SEO Settings',
    group: 'seo',
    type: 'object',
    fieldsets: [
      {
        name: 'searchEngineSettings',
        title: 'Search Engine Settings',
        options: {
          columns: 2,
        },
      },
    ],
    fields: [
      ...(removeSlug
        ? []
        : [
            defineField({
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              description: 'The URL path for this page.',
              options: {
                source: 'title',
              },
              components: {
                input: SlugInput as never,
              },
              validation: Rule => Rule.required(),
            }),
          ]),
      defineField({
        name: 'pageTitle',
        title: 'Page Title',
        type: 'string',
        description: 'The title that will appear in search engine results.',
      }),
      defineField({
        name: 'pageDescription',
        title: 'Page Description',
        type: 'text',
        description: 'The description that will appear in search engine results.',
        rows: 4,
      }),
      defineField({
        name: 'openGraphImage',
        title: 'Open Graph Image',
        type: 'image',
        description: 'The image that will appear when this page is shared on social media.',
      }),
      defineField({
        name: 'noIndex',
        title: 'No Index',
        type: 'boolean',
        fieldset: 'searchEngineSettings',
        description: 'Prevent search engines from indexing this page.',
        initialValue: false,
      }),
      defineField({
        name: 'noFollow',
        title: 'No Follow',
        type: 'boolean',
        fieldset: 'searchEngineSettings',
        description: 'Prevent search engines from following links on this page.',
        initialValue: false,
      }),
    ],
  });
