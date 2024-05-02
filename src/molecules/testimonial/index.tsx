'use client';

import { type FC, useEffect, useRef, useState } from 'react';

import Button from 'molecules/button';
import Image from 'molecules/image';

import richTextParser from 'utils/richTextParser';

import { cx } from 'theme/css';
import { testimonial } from 'theme/recipes';

import type { Testimonial as TestimonialProps } from 'types/payload-types';

const Testimonial: FC<TestimonialProps> = ({ id, author, content }) => {
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
    <div id={`${id}`} className={cx(classes.root, 'group')}>
      <div className={classes.topContainer}>
        {author && (
          <div className={classes.authorContainer}>
            <Image src={author?.headshot?.url} alt={author?.headshot?.alt} noFrame className={classes.headshot} />
            <div className={classes.authorDetails}>
              <h3 className={classes.authorName}>{author.displayName}</h3>
              <div
                className={classes.position}
              >{`${author.position}${author?.company?.companyName ? ` @ ${author?.company?.companyName}` : ''}`}</div>
            </div>
          </div>
        )}
        <Button icon="expand" className={classes.expandButton} onClick={() => setTruncated(!truncated)} iconsOnly />
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
            {richTextParser(content.root.children)}
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonial;
