import Carousel from 'molecules/carousel';
import Heading from 'molecules/heading';

import { testimonialComponent } from 'theme/recipes';

import type { FC } from 'react';
import type { TestimonialComponent } from 'types/payload-types';

const Testimonials: FC<TestimonialComponent> = ({ id, heading, testimonials }) => {
  const classes = testimonialComponent();

  return (
    <div className={classes.root}>
      <div className={classes.headerWrapper}>
        {heading && <Heading headingType="h2" size="md" alignment="start" {...heading[0]} />}
      </div>
      {testimonials && (
        <Carousel id={id} className={classes.testimonials} items={testimonials} itemComponent="testimonial" />
      )}
    </div>
  );
};

export default Testimonials;
