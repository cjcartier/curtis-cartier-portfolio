import { q } from 'groqd';

import { personSelection } from 'molecules/attribution';
import Carousel from 'molecules/carousel';
import Heading, { headingSelection } from 'molecules/heading';
import { sectionSelection } from 'molecules/section';

import { testimonialComponent } from 'theme/recipes';

import type { Selection, TypeFromSelection } from 'groqd';
import type { FC } from 'react';

type TestimonialsQuery = TypeFromSelection<typeof testimonialsSelection>;

const Testimonials: FC<TestimonialsQuery> = ({ _key, heading, testimonials }) => {
  const classes = testimonialComponent();

  return (
    <div className={classes.root}>
      <div className={classes.headerWrapper}>
        {heading && <Heading headingType="h2" size="md" alignment="start" {...heading} />}
      </div>
      {testimonials && (
        <Carousel id={_key} className={classes.testimonials} items={testimonials} itemComponent="testimonial" />
      )}
    </div>
  );
};

const testimonialSelection = {
  _id: q.string(),
  author: q('author').deref().grab$(personSelection),
  content: q.contentBlocks().optional(),
} satisfies Selection;

export const testimonialsSelection = {
  _key: q.string(),
  _type: q.literal('testimonialComponent'),
  heading: q('heading').grab$(headingSelection),
  testimonials: q('testimonials').filter().deref().grab$(testimonialSelection),
  ...sectionSelection,
} satisfies Selection;

export default Testimonials;
