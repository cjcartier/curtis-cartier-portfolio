// @ts-expect-error need mjs extension
import { css } from 'theme/css/index.mjs';
// @ts-expect-error need mjs extension
import { token } from 'theme/tokens/index.mjs';

import type { FC } from 'react';

type SvgGradientProps = (typeof svgGradients)['home-curve'];
export type SvgGradientTypes = keyof typeof svgGradients;

export const svgGradients = {
  'home-curve': {
    viewPort: {
      x: '0',
      y: '0',
      width: '1915',
      height: '1362',
    },
    gradient: {
      id: 'home-curve-bg-color',
      colors: [
        { color: token('colors.blue.400'), position: '40%' },
        { color: token('colors.pink.200'), position: '55%' },
        { color: token('colors.red.300'), position: '80%' },
      ],
      direction: {
        x1: '1',
        y1: '0',
        x2: '0',
        y2: '1',
      },
    },
    styles: {
      svg: {
        maskImage:
          'linear-gradient(180deg, black 50%, rgba(0, 0, 0, 0.24) 75%, rgba(0, 0, 0, 0.08) 90%, rgba(0, 0, 0, 0) 100%)',
      },
    },
  },
} as const;

const SvgGradient: FC<SvgGradientProps> = ({ gradient: { id, direction, colors } }) => (
  <svg aria-hidden="true" focusable="false" className={css({ w: 0, h: 0, position: 'absolute' })}>
    <linearGradient id={id} key={id} {...direction}>
      {colors.map((color, index) => (
        <stop
          key={color.position}
          stopColor={color.color}
          offset={color.position || `${(index / (colors.length - 1)) * 100}%`}
        />
      ))}
    </linearGradient>
  </svg>
);

export default SvgGradient;
