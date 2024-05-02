import slugField from 'payload/fields/slug';

import populatePublishedAt from 'payload/hooks/populatePublishedAt';
import defaultAccess from 'payload/utils/defaultAccess';

import type { CollectionConfig } from 'payload/dist/collections/config/types';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
    preview: doc =>
      `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/api/preview?url=${encodeURIComponent(
        `${process.env.PAYLOAD_PUBLIC_SERVER_URL}/${doc.slug !== 'home' ? doc.slug : ''}`,
      )}&secret=${process.env.PAYLOAD_PUBLIC_DRAFT_SECRET}`,
  },
  hooks: {
    beforeChange: [populatePublishedAt],
  },
  ...defaultAccess,
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'layout',
      label: 'Content',
      type: 'relationship',
      required: true,
      access: {
        read: () => true,
      },
      relationTo: ['hero', 'switchback', 'testimonialComponent', 'toolsComponent'],
      hasMany: true,
    },
    slugField(),
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
};

export default Pages;
