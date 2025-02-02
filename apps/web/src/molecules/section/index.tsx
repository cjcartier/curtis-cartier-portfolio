import { type Selection, TypeFromSelection, q } from 'groqd';

import Backgrounds from 'atoms/backgrounds';

import { constructUnionFromArray } from 'lib/groq';

import { cx } from 'theme/css';
import { styled } from 'theme/jsx';
import { section } from 'theme/recipes';

import type { ElementType, FC, ReactNode } from 'react';
import type { HTMLStyledProps } from 'theme/types';

interface SectionProps extends Omit<HTMLStyledProps<'div'>, 'padding' | 'backgroundImage'>, SectionQueryProps {
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
      <div className={grain} />
      <div className={container}>
        {backgroundImage && <Backgrounds id={backgroundImage} />}
        {children}
      </div>
    </Component>
  );
};

const sectionSizing = ['none', 'small', 'medium', 'large', 'xLarge'] as const;

export const sectionSelection = {
  backgroundImage: q.literal('home-curve').optional(),
  padding: q
    .object({
      top: constructUnionFromArray(sectionSizing),
      bottom: constructUnionFromArray(sectionSizing),
    })
    .optional(),
  sectionId: ['sectionId.current', q.string().nullable()],
} satisfies Selection;

export type SectionQueryProps = TypeFromSelection<typeof sectionSelection>;

export default Section;
