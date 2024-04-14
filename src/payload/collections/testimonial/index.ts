import adminsOrPublished from '../../access/adminsOrPublished';

import type { CollectionConfig } from 'payload/types';

const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'authorName',
  },
  access: {
    read: adminsOrPublished,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'authorName',
      type: 'text',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'person',
    },
    {
      name: 'content',
      type: 'richText',
    },
  ],
};

export default Testimonials;
