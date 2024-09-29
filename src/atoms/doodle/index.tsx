import { objectKeys } from 'utils/typeUtils';

import { css, cx } from 'theme/css';
import { styled } from 'theme/jsx';
import { token } from 'theme/tokens';

import type { FC } from 'react';
import type { HTMLStyledProps } from 'theme/jsx';
import type { Token } from 'theme/tokens';
import type { ColorToken, SpacingToken } from 'theme/tokens';

export const doodles = {
  'hard': {
    base: 'teal.700',
    dark: 'yellow.700',
  },
  'half-hard': {
    base: 'red.300',
    dark: 'red.300',
  },
  'squiggle': {
    base: 'blue.300',
    dark: 'blue.300',
  },
};
export const doodleIds = objectKeys(doodles);
export const doodleSet = new Set([...doodleIds]);

export type DoodleIds = (typeof doodleIds)[number];

export interface DoodleProps extends HTMLStyledProps<'svg'> {
  /**
   * Defines the props for an doodle component.
   */
  doodle: DoodleIds;
  /**
   * Defines the size and color properties for an doodle component.
   */
  size?: SpacingToken;
  /**
   * Overrides the default color token for the doodle.
   */
  doodleColor?: ColorToken | null;
  /**
   * Defines an optional aria-label attribute for the doodle component.
   */
  ariaLabel?: string;
}

export const SVG = styled('svg');

const Doodle: FC<DoodleProps> = ({ doodle, size, doodleColor, className, ...props }) =>
  doodleSet.has(doodle) && (
    <div
      className={cx(
        css({
          color: { base: 'var(--doodle-color)', _dark: 'var(--doodle-color-dark)' },
          width: 'fit-content',
          height: 'fit-content',
        }),
        className,
      )}
      style={{
        '--doodle-color': token(`colors.${doodles[doodle].base}` as Token),
        '--doodle-color-dark': token(`colors.${doodles[doodle].dark}` as Token),
      }}
    >
      <SVG
        w={size || '24'}
        h={size || '24'}
        fill={doodleColor || 'currentColor'}
        stroke={doodleColor || 'currentColor'}
        focusable="false"
        aria-hidden
        className={css({ overflow: 'visible' })}
        {...props}
      >
        <use href={`/doodles/sprites.svg#${doodle}`} />
      </SVG>
    </div>
  );

export default Doodle;
