import SvgGradient, { SvgGradientTypes, svgGradients } from 'atoms/gradients/svgGradient';
import { FC } from 'react';
import { css } from 'theme/css';

const Backgrounds: FC<{ id: SvgGradientTypes }> = ({ id }) => {
  const svgStyles = svgGradients[id];

  return (
    <>
      <SvgGradient {...svgStyles} />
      <div className={css({ position: 'absolute', w: '100%', top: '0', left: '0' })}>
        <svg
          width="100%"
          className={css({ w: '100%', height: '100%' })}
          style={{
            fill: `url(#${svgStyles.id})`,
            filter: `url(/backgrounds/filters.svg#${id})`,
            aspectRatio: `${svgStyles.viewPort.width} / ${svgStyles.viewPort.height}`,
          }}
        >
          <use href={`/backgrounds/sprites.svg#${id}`} />
        </svg>
      </div>
    </>
  );
};

export default Backgrounds;
