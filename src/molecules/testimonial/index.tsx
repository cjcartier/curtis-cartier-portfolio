'use client';

import { type FC, useEffect, useRef, useState } from 'react';

import Button from 'molecules/button';
import Image from 'molecules/image';
import RichText from 'molecules/richText';

import { cx } from 'theme/css';
import { testimonial } from 'theme/recipes';

import type { Testimonial as TestimonialSanityProps } from 'lib/sanity/gen/sanity.types';

interface TestimonialProps extends TestimonialSanityProps {
  /**
   * optional prop if being used in a carousel.
   */
  active?: boolean;
}

const Testimonial: FC<TestimonialProps> = ({ _id, author, content, active }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [truncated, setTruncated] = useState(true);
  const [copyMaxHeight, setCopyMaxHeight] = useState(0);
  const [copyMinHeight, setCopyMinHeight] = useState(0);
  const classes = testimonial();

  useEffect(() => {
    if (ref?.current) {
      setCopyMinHeight(ref?.current?.clientHeight);
      setCopyMaxHeight(ref?.current?.scrollHeight);
    }
  }, []);

  return (
    <div id={_id} className={cx(classes.root, 'group')}>
      <div className={classes.topContainer}>
        {author && (
          <div className={classes.authorContainer}>
            {author?.headshot && author?.headshot?.asset && (
              <Image image={author?.headshot?.asset} alt={author?.headshot?.alt} noFrame className={classes.headshot} />
            )}
            <div className={classes.authorDetails}>
              <h3 className={classes.authorName}>{author.displayName}</h3>
              {author?.company && (
                <div
                  className={classes.position}
                >{`${author.position}${author?.company?.companyName ? ` @ ${author?.company?.companyName}` : ''}`}</div>
              )}
            </div>
          </div>
        )}
        <Button
          icon="expand"
          className={classes.expandButton}
          onClick={() => setTruncated(!truncated)}
          tabIndex={active ? 0 : -1}
          iconsOnly
        />
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

export default Testimonial;
