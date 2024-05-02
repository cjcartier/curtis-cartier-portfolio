import Heading from 'payload/blocks/heading';

import defaultAccess from 'payload/utils/defaultAccess';

import type { CollectionConfig } from 'payload/dist/collections/config/types';

const TestimonialComponent: CollectionConfig = {
  slug: 'testimonialComponent',
  admin: {
    useAsTitle: 'title',
  },
  ...defaultAccess,
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'heading',
      type: 'blocks',
      blocks: [Heading],
      maxRows: 1,
      label: 'Testimonial Section Heading',
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
    },
  ],
};

export default TestimonialComponent;
