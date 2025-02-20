import { Selection } from 'groqd';

import { iconIds, iconSet } from '@packages/ui/icons';

import { constructUnionFromArray } from 'lib/groq';

import { css, cx } from 'theme/css';

import type { IconProps } from 'molecules/icon/types';
import type { FC } from 'react';

const Icon: FC<IconProps> = ({ icon, size, ariaLabel, className, ...props }) =>
  iconSet.has(icon) && (
    <svg
      className={cx(css({ fill: 'current', stroke: 'current' }), className)}
      focusable="false"
      role={ariaLabel ? 'img' : undefined}
      aria-hidden={!ariaLabel}
      width={size || 24}
      height={size || 24}
      {...props}
    >
      {ariaLabel && <title>{ariaLabel}</title>}
      <use href={`/icons/sprites.svg#${icon}`} />
    </svg>
  );

export const iconSelection = {
  icon: ['icon.name', constructUnionFromArray(iconIds).nullable()],
} satisfies Selection;

export default Icon;
