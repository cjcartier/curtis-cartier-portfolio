import { q } from 'groqd';

import { hasArrayValues } from '@packages/utils/arrays';

import Doodle from 'atoms/doodle';

import Badge from 'molecules/badge';
import Button, { buttonSelection } from 'molecules/button';
import ButtonWrapper from 'molecules/button/components/ButtonWrapper';
import RichText from 'molecules/richText';

import { cx } from 'theme/css';
import { styled } from 'theme/jsx';
import { heading as headingStyles } from 'theme/recipes';

import type { DoodleIds } from 'atoms/doodle';
import type { Selection, TypeFromSelection } from 'groqd';
import type { FC, ReactNode } from 'react';
import type { HeadingVariant } from 'theme/recipes';

type HeadingQuery = TypeFromSelection<typeof headingSelection>;

interface HeadingProps extends HeadingQuery, HeadingVariant {
  headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  beforeHeading?: ReactNode;
  bodyClasses?: string;
}

const Heading: FC<HeadingProps> = ({
  size,
  alignment,
  heading,
  subheading,
  badges,
  doodle,
  beforeHeading,
  buttons,
  headingType,
  bodyClasses,
}) => {
  const classes = headingStyles({ size, alignment }),
    Component = styled(headingType || 'h2');

  return (
    <>
      <div className={classes.root}>
        {beforeHeading && beforeHeading}
        {hasArrayValues(badges) && badges.map(badge => badge && <Badge key={badge} label={badge} />)}
        {heading && (
          <Component className={classes.heading}>
            {doodle && <Doodle doodle={doodle as DoodleIds} className={classes.doodle} />}
            {heading}
          </Component>
        )}
        {subheading && (
          <div className={cx(classes?.subheading, bodyClasses)}>
            <RichText blocks={subheading} />
          </div>
        )}
        {hasArrayValues(buttons) && (
          <ButtonWrapper>{buttons.map(button => button && <Button key={button._key} {...button} />)}</ButtonWrapper>
        )}
      </div>
    </>
  );
};

export const headingSelection = {
  heading: q.string().optional(),
  subheading: q.contentBlocks().optional().nullable(),
  doodle: q.string().optional().nullable(),
  badges: q.array(q.string()).optional().nullable(),
  buttons: q('buttons').filter().grab$(buttonSelection).nullable(),
} satisfies Selection;

export default Heading;
