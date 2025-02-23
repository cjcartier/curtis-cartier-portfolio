'use client';

import { q } from 'groqd';
import { type FC, useEffect, useRef, useState } from 'react';

import Attribution, { personSelection } from 'molecules/attribution';
import Icon from 'molecules/icon';
import RichText from 'molecules/richText';

import { cx } from 'theme/css';
import { button, testimonial } from 'theme/recipes';

import type { Selection, TypeFromSelection } from 'groqd';

export interface TestimonialProps extends TypeFromSelection<typeof testimonialSelection> {
  /**
   * optional prop if being used in a carousel.
   */
  active?: boolean;
}

// TODO: Is there a Radix component to handle state?
const Testimonial: FC<TestimonialProps> = ({ _id, author, content, active }) => {
  const ref = useRef<HTMLDivElement>(null),
    [truncated, setTruncated] = useState(true),
    [copyMaxHeight, setCopyMaxHeight] = useState(0),
    [copyMinHeight, setCopyMinHeight] = useState(0),
    classes = testimonial(),
    { root: buttonRoot } = button({ hierarchy: 'fill' });

  useEffect(() => {
    if (ref?.current) {
      setCopyMinHeight(ref?.current?.clientHeight);
      setCopyMaxHeight(ref?.current?.scrollHeight);
    }
  }, []);

  return (
    <div id={_id} className={cx(classes.root, 'group')}>
      <div className={classes.topContainer}>
        {author && <Attribution {...author} />}
        {copyMaxHeight > copyMinHeight && (
          <button
            className={cx(classes.expandButton, buttonRoot)}
            tabIndex={active ? 0 : -1}
            data-icon-only
            onClick={() => setTruncated(!truncated)}
          >
            <Icon icon="expand" />
          </button>
        )}
      </div>
      {content && (
        <>
          <div
            ref={ref}
            className={classes.copy}
            data-truncated={truncated ? 'collapsed' : 'expanded'}
            style={{
              '--copy-max-height': `${copyMaxHeight}px`,
              '--copy-min-height': `${copyMinHeight}px`,
            }}
          >
            <RichText blocks={content} />
          </div>
        </>
      )}
    </div>
  );
};

export const testimonialSelection = {
  _id: q.string(),
  author: q('author').deref().grab(personSelection),
  content: q.contentBlocks().optional(),
} satisfies Selection;

export default Testimonial;
