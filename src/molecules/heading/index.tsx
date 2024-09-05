import Doodle from 'atoms/doodle';

import Badge from 'molecules/badge';
import Button from 'molecules/button';
import ButtonWrapper from 'molecules/button/components/ButtonWrapper';
import RichText from 'molecules/richText';

import { arrayValuesExist } from 'utils/arrays';

import { styled } from 'theme/jsx';
import { heading as headingStyles } from 'theme/recipes';

import type { Hero } from 'lib/sanity/gen/sanity.types';
import type { FC, ReactNode } from 'react';
import type { HeadingVariant } from 'theme/recipes';
import type { ExtractKey } from 'types/global';

interface HeadingProps extends ExtractKey<Hero, 'heading'>, HeadingVariant {
  headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  beforeHeading?: ReactNode;
}

const Heading: FC<HeadingProps> = ({
  heading,
  subheading,
  doodle,
  badges,
  buttons,
  headingType,
  size,
  alignment,
  beforeHeading,
}) => {
  const classes = headingStyles({ size, alignment });
  const Component = styled(headingType || 'h2');

  return (
    <>
      <div className={classes.root}>
        {beforeHeading && beforeHeading}
        {arrayValuesExist(badges) && badges.map(badge => <Badge key={badge._key} {...badge} />)}
        {heading && (
          <Component className={classes.heading}>
            {doodle && <Doodle doodle={doodle} className={classes.doodle} />}
            {heading}
          </Component>
        )}
        {subheading && (
          <div className={classes?.subheading}>
            <RichText blocks={subheading} />
          </div>
        )}
        {arrayValuesExist(buttons) && (
          <ButtonWrapper>
            {buttons.map(button => (
              <Button key={button._key} {...button.button} />
            ))}
          </ButtonWrapper>
        )}
      </div>
    </>
  );
};

export default Heading;
