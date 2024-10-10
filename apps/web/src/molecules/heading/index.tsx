import { q } from 'groqd';

import Doodle from 'atoms/doodle';

import Badge, { badgeSelection } from 'molecules/badge';
import Button, { buttonArraySelection } from 'molecules/button';
import ButtonWrapper from 'molecules/button/components/ButtonWrapper';
import RichText from 'molecules/richText';

import { hasArrayValues } from 'utils/arrays';

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
}) => {
  const classes = headingStyles({ size, alignment });
  const Component = styled(headingType || 'h2');

  return (
    <>
      <div className={classes.root}>
        {beforeHeading && beforeHeading}
        {hasArrayValues(badges) && badges.map(badge => badge && <Badge key={badge._key} {...badge} />)}
        {heading && (
          <Component className={classes.heading}>
            {doodle && <Doodle doodle={doodle as DoodleIds} className={classes.doodle} />}
            {heading}
          </Component>
        )}
        {subheading && (
          <div className={classes?.subheading}>
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
  subheading: q.contentBlocks().optional(),
  doodle: q.string().optional(),
  badges: q.object(badgeSelection).array().optional(),
  buttons: q.object(buttonArraySelection).array().optional(),
} satisfies Selection;

export default Heading;
