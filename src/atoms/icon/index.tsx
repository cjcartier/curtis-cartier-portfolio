import { iconSet } from 'atoms/icon/data';

import type { IconProps } from 'atoms/icon/types';
import type { FC } from 'react';

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
