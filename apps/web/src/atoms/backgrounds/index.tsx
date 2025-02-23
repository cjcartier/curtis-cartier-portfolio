import Image from 'next/image';

// import SvgGradient, { svgGradients } from 'atoms/gradients/svgGradient';

import { css } from 'theme/css';

import type { SvgGradientTypes } from 'atoms/gradients/svgGradient';
import type { FC } from 'react';

// TODO: Figure out why the SVG version was not working on Safari and why it was slowing down FF
const Backgrounds: FC<{ id: SvgGradientTypes }> = () => (
  // const svgStyles = svgGradients[id];

  <div
    className={css({
      marginInline: 'auto',
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      top: '30%',
      flexDir: 'column',
      w: '100',
      maxW: 'container.sm',
      paddingX: '16',
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
    {/* <SvgGradient {...svgStyles} /> */}
    <div
      className={css({
        position: 'absolute',
        w: '145%',
        aspectRatio: '1915/ 1362',
        maskImage: 'linear-gradient(90deg, transparent 8%, white 20%, white 70%, transparent 85%)',
        zIndex: '-1',
      })}
    >
      <Image
        src="/backgrounds/swoosh-stroke-1-light.svg"
        alt=""
        priority
        fill
        className={css({
          maskImage: 'linear-gradient(0deg, transparent 10%, white 30%)',
          opacity: { base: '1', _dark: '0' },
          transition: 'opacity 0.2s ease-in-out',
        })}
      />
      <Image
        src="/backgrounds/swoosh-stroke-1.svg"
        alt=""
        priority
        fill
        className={css({
          maskImage: 'linear-gradient(0deg, transparent 10%, white 30%)',
          opacity: { base: '0', _dark: '1' },
          transition: 'opacity 0.2s ease-in-out',
        })}
      />

      {/* <svg
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
        </svg> */}
    </div>
  </div>
);
export default Backgrounds;
//
