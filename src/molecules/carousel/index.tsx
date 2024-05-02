'use client';

import * as carouselMachine from '@zag-js/carousel';
import { normalizeProps, useMachine } from '@zag-js/react';

import Icon from 'atoms/icon';

import Testimonial from 'molecules/testimonial';

import { arrayValuesExist } from 'utils/arrays';

import { cx } from 'theme/css';
import { carousel } from 'theme/recipes';

import type { FC } from 'react';
import type { ClassStyles } from 'types/global';
import type { Testimonial as TestimonialProps } from 'types/payload-types';

interface CarouselProps extends ClassStyles {
  id: string | number;
  itemComponent: 'testimonial';
  items: (number | TestimonialProps)[];
}

const getComponent = (componentName: string, props: TestimonialProps) => {
  switch (componentName) {
    case 'testimonial':
      return <Testimonial {...props} />;
    default:
      return null;
  }
};

const Carousel: FC<CarouselProps> = ({ id, className, items, itemComponent }) => {
  const [state, send] = useMachine(carouselMachine.machine({ id: `${id}`, loop: true, spacing: '32px' }));
  const classes = carousel();

  const api = carouselMachine.connect(state, send, normalizeProps);

  return (
    <div className={cx(className, classes.root)} {...api.rootProps}>
      <div {...api.viewportProps}>
        <div {...api.itemGroupProps}>
          {arrayValuesExist(items) &&
            items.map((item, index) => {
              if (typeof item === 'number') {
                return null;
              }

              return (
                <div key={item.id} {...api.getItemProps({ index })}>
                  {getComponent(itemComponent, item)}
                </div>
              );
            })}
        </div>
      </div>
      <div className={classes.navigationContainer}>
        <button className={classes.navigationArrows} tabIndex={0} {...api.prevTriggerProps}>
          <Icon icon="chevron-left" />
        </button>
        <div className={classes.indicatorGroup} {...api.indicatorGroupProps}>
          {items.map((item, index) => {
            if (typeof item === 'number') {
              return null;
            }

            return <button key={item.id} className={classes.indicator} {...api.getIndicatorProps({ index })} />;
          })}
        </div>
        <button className={classes.navigationArrows} tabIndex={0} {...api.nextTriggerProps}>
          <Icon icon="chevron-right" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
