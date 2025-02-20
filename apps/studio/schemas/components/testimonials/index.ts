import { MdOutlineRateReview } from 'react-icons/md';
import { defineField } from 'sanity';

import definePageComponent from '@/schemas/definitions/component';
import heading from '@/schemas/fields/heading';

const testimonials = definePageComponent({
  title: 'Testimonial',
  name: 'testimonialComponent',
  icon: MdOutlineRateReview,
  fields: [
    heading,
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'testimonial' }],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'heading.heading',
      subtitle: 'heading.subheading',
    },
  },
});

export default testimonials;
