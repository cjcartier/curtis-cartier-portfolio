import { defineField } from 'sanity';

import heading from '@/schemas/fields/heading';
import definePageComponent from '@/schemas/definitions/component';
import { MdOutlineRateReview } from 'react-icons/md';

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
});

export default testimonials;
