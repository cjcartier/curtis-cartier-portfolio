import { q } from 'groqd';

import { runQuery } from 'lib/client';
import { getComponent } from 'lib/groq';

import { personSelection } from 'molecules/attribution';
import Carousel from 'molecules/carousel';
import Heading, { headingSelection } from 'molecules/heading';

import { testimonialComponent } from 'theme/recipes';

import type { Selection } from 'groqd';
import type { FC } from 'react';
import type { ComponentId } from 'types/global';

const Testimonials: FC<ComponentId> = async ({ _id }) => {
  const classes = testimonialComponent();

  const query = getComponent(_id, 'testimonialComponent').grab({
    heading: q.object(headingSelection),
    testimonials: q('testimonials')
      .filter()
      .deref()
      .grab$(testimonialSelection),
  });

  const { heading, testimonials } = (await runQuery(query))[0];

  return (
    <div className={classes.root}>
      <div className={classes.headerWrapper}>
        {heading && (
          <Heading headingType='h2' size='md' alignment='start' {...heading} />
        )}
      </div>
      {testimonials && (
        <Carousel
          id={_id}
          className={classes.testimonials}
          items={testimonials}
          itemComponent='testimonial'
        />
      )}
    </div>
  );
};

const testimonialSelection = {
  _id: q.string(),
  author: q('author').deref().grab$(personSelection),
  content: q.contentBlocks().optional(),
} satisfies Selection;

export const testimonialComponentSelection = {
  heading: q('heading').grab$(headingSelection),
  testimonials: q('testimonials').filter().deref().grab$(testimonialSelection),
} satisfies Selection;

export default Testimonials;
