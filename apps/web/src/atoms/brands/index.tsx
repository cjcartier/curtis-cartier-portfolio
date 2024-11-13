import { brandSet } from 'atoms/brands/data';

import { css, cx } from 'theme/css';

import type { BrandProps } from 'atoms/brands/types';
import type { FC } from 'react';

const Brand: FC<BrandProps> = ({ brand, height, className, ...props }) =>
  brandSet.has(brand) && (
    <svg
      focusable="false"
      aria-hidden
      className={cx(css({ fill: 'current', stroke: 'current', width: '-webkit-fill-available' }), className)}
      style={height && { height }}
      {...props}
    >
      <use href={`/brands/sprites.svg#${brand}`} />
    </svg>
  );

export default Brand;
