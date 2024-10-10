import { defineType } from 'sanity';

const Testimonials = defineType({
  name: 'testimonial',
  title: 'Entity: Testimonials',
  type: 'document',
  fields: [
    {
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'person' }],
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
});

export default Testimonials;
