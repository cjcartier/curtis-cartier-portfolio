import { logoSet } from 'atoms/logo/types/ids';

import { css, cx } from 'theme/css';

import type { LogoProps } from 'atoms/logo/types';
import type { FC } from 'react';

const Logo: FC<LogoProps> = ({ logo, size, className, ...props }) =>
  logoSet.has(logo) && (
    <svg
      focusable="false"
      aria-hidden
      className={cx(css({ fill: 'current', stroke: 'current' }), className)}
      style={size && { width: size, height: size }}
      {...props}
    >
      <use href={`/logos/sprites.svg#${logo}`} />
    </svg>
  );

export default Logo;
