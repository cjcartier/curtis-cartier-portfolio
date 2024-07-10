import { defineType } from 'sanity';

import heading from 'schemas/fields/heading';
import sectionField from 'schemas/fields/section';

const TestimonialComponent = defineType({
  name: 'testimonialComponent',
  title: 'Component: Testimonial',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    heading,
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          name: 'testimonial',
          title: 'Testimonial',
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
    },
    sectionField,
  ],
});

export default TestimonialComponent;
