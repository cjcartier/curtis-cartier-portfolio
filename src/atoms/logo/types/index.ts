import type { LogoIds } from 'atoms/logo/types/ids';
import type { ClassStyles } from 'types/global';

export interface LogoProps extends ClassStyles {
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
}
