import SvgGradient, { svgGradients } from '@/atoms/gradients/svgGradient';

import { css } from 'theme/css';

import type { SvgGradientTypes } from '@/atoms/gradients/svgGradient';
import type { FC } from 'react';

const Backgrounds: FC<{ id: SvgGradientTypes }> = ({ id }) => {
  const svgStyles = svgGradients[id];

  return (
    <>
      <SvgGradient {...svgStyles} />
      <div
        className={css({
          position: 'absolute',
          w: '145%',
          top: '50%',
          left: '-10%',
          zIndex: '-1',
        })}
      >
        <svg
          width='100%'
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
    </>
  );
};

export default Backgrounds;
