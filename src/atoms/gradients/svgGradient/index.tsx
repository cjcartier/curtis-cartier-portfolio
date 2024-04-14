import { FC } from 'react';
import { css } from 'theme/css';
import { token } from 'theme/tokens';

type SvgGradientProps = (typeof svgGradients)['home-curve'];
export type SvgGradientTypes = keyof typeof svgGradients;

export const svgGradients = {
  'home-curve': {
    id: 'home-curve',
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
    viewPort: {
      x: '0',
      y: '0',
      width: '1440',
      height: '1361',
    },
  },
} as const;

const SvgGradient: FC<SvgGradientProps> = ({ id, direction, colors }) => (
  <svg aria-hidden="true" focusable="false" className={css({ w: 0, h: 0, position: 'absolute' })}>
    <linearGradient id={id} {...direction}>
      {colors.map((color, index) => (
        <stop
          key={index}
          stopColor={color.color}
          offset={color.position || `${(index / (colors.length - 1)) * 100}%`}
        />
      ))}
    </linearGradient>
  </svg>
);

export default SvgGradient;
