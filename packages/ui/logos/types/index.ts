import { logoIds } from '..';

export type LogoIds = (typeof logoIds)[number];

export interface LogoProps {
  /**
   * Defines the props for an logo component.
   */
  logo: LogoIds;
  /**
   * Defines the size and color properties for an logo component.
   */
  size?: `${number}px`;
  /**
   * Defines an optional aria-label attribute for the logo component.
   */
  ariaLabel?: string;
  /**
   * Defines whether the logo is an icon.
   */
  isIcon?: boolean;
  className?: string;
}
