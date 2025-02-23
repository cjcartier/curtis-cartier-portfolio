/**
 *
 * This file is needed to display logos with gradients on Safari
 *
 */

import { css } from 'theme/css';

import type { FC } from 'react';

const LogoGradients: FC = () => (
  <svg className={css({ h: 0, w: 0, position: 'absolute' })}>
    <defs>
      <linearGradient id="jira-a">
        <stop offset=".18" stop-color="#0052cc" />
        <stop offset="1" stop-color="#2684ff" />
      </linearGradient>
      <linearGradient id="jira-b" x1="98.031%" x2="58.888%" xlinkHref="#jira-a" y1=".161%" y2="40.766%" />
      <linearGradient id="jira-c" x1="100.665%" x2="55.402%" xlinkHref="#jira-a" y1=".455%" y2="44.727%" />

      <linearGradient id="dato-gradient" x1="1" y1="1" x2="1" y2="0" gradientUnits="objectBoundingBox">
        <stop stop-color="#FF7751"></stop>
        <stop offset="1" stop-color="#FF593D"></stop>
      </linearGradient>

      <linearGradient
        id="turbo-gradient"
        x1="0"
        y1="0"
        x2="1"
        y2="0"
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(-2.73101,2.73099,-2.73099,-2.73101,3.24766,0.526225)"
      >
        <stop offset="0" stop-color="#0096ff" stopOpacity={1} />
        <stop offset="1" stop-color="#ff1e56" stopOpacity={1} />
      </linearGradient>
    </defs>
  </svg>
);

export default LogoGradients;
