import { logoSet } from '@packages/ui/logos';

import { cx } from 'theme/css';

import type { LogoProps } from '@packages/ui/logos/types';
import type { FC } from 'react';

const Logo: FC<LogoProps> = ({ logo, size, className, isIcon, ...props }) =>
  logoSet.has(logo) && (
    <svg
      focusable="false"
      aria-hidden
      className={cx(className)}
      style={size && { width: size, height: size }}
      {...props}
    >
      <use
        href={`/logos/sprites.svg#${logo}${isIcon ? '-icon' : ''}`}
        xlinkHref={`/logos/sprites.svg#${logo}${isIcon ? '-icon' : ''}`}
      />
    </svg>
  );

export default Logo;
