import { type Selection, TypeFromSelection, q } from 'groqd';

import Backgrounds from 'atoms/backgrounds';

import { constructUnionFromArray } from 'lib/groq';

import { cx } from 'theme/css';
import { styled } from 'theme/jsx';
import { section } from 'theme/recipes';

import type { ElementType, FC, ReactNode } from 'react';
import type { HTMLStyledProps } from 'theme/types';

interface SectionProps extends Omit<HTMLStyledProps<'div'>, 'padding' | 'backgroundImage'>, Maybify<SectionQueryProps> {
  /**
   * An optional alternative HTML element type to render the section with.
   */
  as?: ElementType;
  /**
   * The content to be rendered inside the section.
   */
  children: ReactNode;
}

export const Section: FC<SectionProps> = ({
  as,
  sectionId,
  children,
  backgroundImage,
  padding,
  className,
  ...props
}) => {
  const { root, grain, container } = section({
      paddingTop: padding?.top || 'medium',
      paddingBottom: padding?.bottom || 'medium',
    }),
    Component = styled(as || 'section');

  return (
    <Component as="section" id={sectionId} className={cx(root, className)} {...props}>
      {backgroundImage && <Backgrounds id={backgroundImage} />}
      <div className={grain} />
      <div className={container}>{children}</div>
    </Component>
  );
};

export const sectionSelection = {
  backgroundImage: q.literal('home-curve').optional().nullable(),
  padding: q
    .object({
      top: constructUnionFromArray(['none', 'small', 'medium', 'large', 'xLarge'] as const),
      bottom: constructUnionFromArray(['none', 'small', 'medium', 'large', 'xLarge'] as const),
    })
    .optional(),
  sectionId: ['sectionId.current', q.string().nullable()],
} satisfies Selection;

export type SectionQueryProps = TypeFromSelection<typeof sectionSelection>;

export default Section;
