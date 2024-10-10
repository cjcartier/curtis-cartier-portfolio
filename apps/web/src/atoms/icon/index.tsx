import { iconSet } from 'atoms/icon/data';

import { css, cx } from 'theme/css';

import type { IconProps } from 'atoms/icon/types';
import type { FC } from 'react';

const Icon: FC<IconProps> = ({ icon, size, ariaLabel, className, ...props }) =>
  iconSet.has(icon) && (
    <svg
      className={cx(css({ fill: 'current', stroke: 'current' }), className)}
      focusable="false"
      role={ariaLabel ? 'img' : undefined}
      aria-hidden={!ariaLabel}
      style={size && { width: size, height: size }}
      {...props}
    >
      {ariaLabel && <title>{ariaLabel}</title>}
      <use href={`/icons/sprites.svg#${icon}`} />
    </svg>
  );

export default Icon;
