import Carousel from 'molecules/carousel';
import Heading from 'molecules/heading';

import { testimonialComponent } from 'theme/recipes';

import type { TestimonialComponent } from 'lib/sanity/gen/sanity.types';
import type { FC } from 'react';

const Testimonials: FC<TestimonialComponent> = ({ _id, heading, testimonials }) => {
  const classes = testimonialComponent();

  return (
    <div className={classes.root}>
      <div className={classes.headerWrapper}>
        {heading && <Heading headingType="h2" size="md" alignment="start" {...heading} />}
      </div>
      {testimonials && (
        <Carousel id={_id} className={classes.testimonials} items={testimonials} itemComponent="testimonial" />
      )}
    </div>
  );
};

export default Testimonials;
