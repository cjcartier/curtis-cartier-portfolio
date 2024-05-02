import defaultAccess from 'payload/utils/defaultAccess';

import type { CollectionConfig } from 'payload/dist/collections/config/types';

const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'authorName',
  },
  ...defaultAccess,
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
