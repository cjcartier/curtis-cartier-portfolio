import { type Selection, q } from 'groqd';

import Backgrounds from '@/atoms/backgrounds';

import { cx } from 'theme/css';
import { styled } from 'theme/jsx';
import { section } from 'theme/recipes';

import type { SvgGradientTypes } from '@/atoms/gradients/svgGradient';
import type { ElementType, FC, ReactNode } from 'react';
import type { SectionVariant } from 'theme/recipes';
import type { HTMLStyledProps } from 'theme/types';
import type { UndefinedProps } from 'types/global';

interface SectionProps
  extends UndefinedProps<SectionVariant>,
    Omit<
      HTMLStyledProps<'div'>,
      'paddingBottom' | 'paddingTop' | 'backgroundImage'
    > {
  /**
   * An optional alternative HTML element type to render the section with.
   */
  as?: ElementType;
  /**
   * A unique identifier for the section.
   */
  id: string;
  /**
   * The content to be rendered inside the section.
   */
  children: ReactNode;
  /**
   * The type of SVG gradient to use as the background image for the section.
   */
  backgroundImage?: SvgGradientTypes | null;
}

export const Section: FC<SectionProps> = ({
  as,
  id,
  children,
  backgroundImage,
  paddingTop,
  paddingBottom,
  className,
  ...props
}) => {
  const { root, grain, container } = section({
    paddingTop: paddingTop || 'medium',
    paddingBottom: paddingBottom || 'medium',
  });
  const Component = styled(as || 'section');

  return (
    <Component as='section' id={id} className={cx(root, className)} {...props}>
      <div className={grain} />
      <div className={container}>
        {backgroundImage && <Backgrounds id={backgroundImage} />}
        {children}
      </div>
    </Component>
  );
};

export const sectionSelection = {
  backgroundImage: q.literal('home-curve').optional(),
  paddingTop: q
    .union([
      q.literal('none'),
      q.literal('small'),
      q.literal('medium'),
      q.literal('large'),
      q.literal('xLarge'),
    ])
    .optional(),
  paddingBottom: q
    .union([
      q.literal('none'),
      q.literal('small'),
      q.literal('medium'),
      q.literal('large'),
      q.literal('xLarge'),
    ])
    .optional(),
} satisfies Selection;

export default Section;
