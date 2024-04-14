import { ElementType, FC, ReactNode } from 'react';
import { styled } from 'theme/jsx';
import { section } from 'theme/recipes';
import { HTMLStyledProps } from 'theme/types';

import Backgrounds from 'atoms/backgrounds';

interface SectionProps extends HTMLStyledProps<'div'> {
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
}

export const Section: FC<SectionProps> = ({ as, id, children, ...props }) => {
  const { root, grain, container } = section();
  const Component = styled(as || 'section');

  return (
    <Component as="section" id={id} className={root} {...props}>
      <Backgrounds id="home-curve" />
      <div className={grain} />
      <div className={container}>{children}</div>
    </Component>
  );
};
