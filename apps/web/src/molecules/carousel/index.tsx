'use client';

import * as carouselMachine from '@zag-js/carousel';
import { normalizeProps, useMachine } from '@zag-js/react';

import { hasArrayValues } from '@packages/utils/arrays';

import Icon from 'atoms/icon';

import Testimonial from 'molecules/testimonial';

import { cx } from 'theme/css';
import { carousel } from 'theme/recipes';

import type { TestimonialProps } from 'molecules/testimonial';
import type { FC } from 'react';
import type { ClassStyles } from 'types/global';

interface CarouselProps extends ClassStyles {
  id: string;
  itemComponent: 'testimonial';
  items: (number | TestimonialProps)[];
}

const getComponent = (componentName: string, props: TestimonialProps, active: boolean) => {
  switch (componentName) {
    case 'testimonial':
      return <Testimonial key={props._id} active={active} {...props} />;
    default:
      return null;
  }
};

const Carousel: FC<CarouselProps> = ({ id, className, items, itemComponent }) => {
  const [state, send] = useMachine(carouselMachine.machine({ id, loop: true, spacing: '32px' }));
  const classes = carousel();

  const api = carouselMachine.connect(state, send, normalizeProps);

  return (
    <div className={cx(className, classes.root)} {...api.getRootProps()}>
      <div {...api.getViewportProps()}>
        <div {...api.getItemGroupProps()}>
          {hasArrayValues(items) &&
            items.map((item, index) => {
              if (typeof item === 'number') return null;

              return (
                <div key={item._id} {...api.getItemProps({ index })}>
                  {getComponent(itemComponent, item, api.index === index)}
                </div>
              );
            })}
        </div>
      </div>
      <div className={classes.navigationContainer}>
        <button className={classes.navigationArrows} tabIndex={0} {...api.getPrevTriggerProps()}>
          <Icon icon="chevron-left" />
        </button>
        <div className={classes.indicatorGroup} {...api.getIndicatorGroupProps()}>
          {items.map((item, index) => {
            if (typeof item === 'number') return null;

            return <button key={item._id} className={classes.indicator} {...api.getIndicatorProps({ index })} />;
          })}
        </div>
        <button className={classes.navigationArrows} tabIndex={0} {...api.getNextTriggerProps()}>
          <Icon icon="chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
