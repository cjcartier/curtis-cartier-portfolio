import { iconSet } from 'atoms/icon/data';

import type { ColorToken, SpacingToken } from 'theme/tokens';
import type { HTMLStyledProps } from 'theme/types';

export const iconIds = Array.from(iconSet);
export type IconIds = (typeof iconIds)[number];

export interface IconProps extends HTMLStyledProps<'svg'> {
  /**
   * Defines the props for an icon component.
   */
  icon: IconIds;
  /**
   * Defines the size and color properties for an icon component.
   */
  size?: SpacingToken;
  /**
   * Defines the color token for the icon, or `null` if no color is specified.
   */
  iconColor?: ColorToken | null;
  /**
   * Defines an optional aria-label attribute for the icon component.
   */
  ariaLabel?: string;
}
