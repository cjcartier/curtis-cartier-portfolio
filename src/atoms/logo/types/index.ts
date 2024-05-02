import type { LogoIds } from 'atoms/logo/types/ids';
import type { SpacingToken } from 'theme/tokens';
import type { HTMLStyledProps } from 'theme/types';

export interface LogoProps extends HTMLStyledProps<'svg'> {
  /**
   * Defines the props for an logo component.
   */
  logo: LogoIds;
  /**
   * Defines the size and color properties for an logo component.
   */
  size?: SpacingToken;
  /**
   * Defines an optional aria-label attribute for the logo component.
   */
  ariaLabel?: string;
}
