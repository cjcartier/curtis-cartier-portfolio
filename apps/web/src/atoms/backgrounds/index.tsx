import SvgGradient, { svgGradients } from 'atoms/gradients/svgGradient';

import { css } from 'theme/css';

import type { SvgGradientTypes } from 'atoms/gradients/svgGradient';
import type { FC } from 'react';

const Backgrounds: FC<{ id: SvgGradientTypes }> = ({ id }) => {
  const svgStyles = svgGradients[id];

  return (
    <div
      className={css({
        marginInline: 'auto',
        position: 'absolute',
        top: '30%',
        left: '0%',
        display: 'flex',
        flexDir: 'column',
        w: '100',
        maxW: 'container.sm',
        paddingX: '16',
        // maskImage: 'linear-gradient(90deg, white 4%, white 10%, white 90%, white 96%)',
        sm: {
          maxW: 'container.md',
          paddingX: '32',
        },
        md: {
          maxW: 'container.lg',
        },
        lg: {
          maxW: 'container.xl',
        },
      })}
    >
      <SvgGradient {...svgStyles} />
      <div
        className={css({
          position: 'absolute',
          w: '145%',

          zIndex: '-1',
        })}
      >
        <svg
          width="100%"
          className={css({
            w: '100%',
            height: '100%',
            filter: {
              base: 'url(/backgrounds/filters.svg#home-curve)',
              _dark: 'url(/backgrounds/filters.svg#home-curve-dark)',
            },
          })}
          style={{
            fill: `url(#${svgStyles.gradient.id})`,
            aspectRatio: `${svgStyles.viewPort.width} / ${svgStyles.viewPort.height}`,
            ...svgStyles.styles.svg,
          }}
        >
          <use href={`/backgrounds/sprites.svg#${id}`} />
        </svg>
      </div>
    </div>
  );
};

export default Backgrounds;
