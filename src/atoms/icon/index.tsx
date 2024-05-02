import { styled } from 'theme/jsx';

import type { FC } from 'react';
import type { HTMLStyledProps } from 'theme/jsx';
import type { ColorToken, SpacingToken } from 'theme/tokens';

export const buttonIds = ['chevron-right', 'chevron-left', 'mail', 'moon', 'sun', 'expand'] as const;
export const miscellaneousIds = ['info-circle'] as const;

export const iconSet = new Set([...buttonIds, ...miscellaneousIds]);
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

export const SVG = styled('svg');

const Icon: FC<IconProps> = ({ icon, size, iconColor, ariaLabel, ...props }) =>
  iconSet.has(icon) && (
    <svg
      width={size || '24'}
      height={size || '24'}
      fill={iconColor || 'currentColor'}
      stroke={iconColor || 'currentColor'}
      focusable="false"
      role={ariaLabel ? 'img' : undefined}
      aria-hidden={!ariaLabel}
      {...props}
    >
      {ariaLabel && <title>{ariaLabel}</title>}
      <use href={`/icons/sprites.svg#${icon}`} />
    </svg>
  );

export default Icon;
