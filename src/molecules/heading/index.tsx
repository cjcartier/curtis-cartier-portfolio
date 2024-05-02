import Doodle from 'atoms/doodle';

import Badge from 'molecules/badge';
import Button from 'molecules/button';
import ButtonWrapper from 'molecules/button/components/ButtonWrapper';

import richTextParser from 'utils/richTextParser';

import { styled } from 'theme/jsx';
import { heading as headingStyles } from 'theme/recipes';

import type { FC } from 'react';
import type { HeadingVariant } from 'theme/recipes';
import type { Badge as BadgeProps, ButtonBlock } from 'types/payload-types';

interface HeadingProps extends HeadingVariant {
  badges?: BadgeProps[] | null;
  doodle?: ('hard' | 'half-hard' | 'squiggle') | null;
  heading: string;
  subheading?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  buttons?: ButtonBlock[] | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'heading';
  headingType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Heading: FC<HeadingProps> = ({ heading, subheading, doodle, badges, buttons, headingType, size, alignment }) => {
  const classes = headingStyles({ size, alignment });
  const Component = styled(headingType || 'h2');

  return (
    <>
      <div className={classes.root}>
        {badges && badges.map(badge => <Badge key={badge.id} {...badge} />)}
        {heading && (
          <Component className={classes.heading}>
            {doodle && <Doodle doodle={doodle} className={classes.doodle} />}
            {heading}
          </Component>
        )}
        {subheading && <div className={classes?.subheading}>{richTextParser(subheading.root.children)}</div>}
        {buttons && (
          <ButtonWrapper>
            {buttons.map(button => (
              <Button key={button.id} {...button.button} />
            ))}
          </ButtonWrapper>
        )}
      </div>
    </>
  );
};

export default Heading;
