'use client';

import ReactParallaxTilt from 'react-parallax-tilt';

import Image from 'molecules/image';

import { heroAsset } from 'theme/recipes';

import type { FC } from 'react';

const DashedFrame: FC<{ className: string }> = ({ className }) => (
  <svg width="calc(100% + 20px)" height="calc(100% + 20px)" fill="none" className={className}>
    <rect
      x="1"
      y="1"
      width="calc(100% - 2px)"
      height="calc(100% - 2px)"
      rx="4"
      strokeWidth="2"
      strokeDasharray="20 10"
    />
  </svg>
);

const AssetNode: FC<{ className: string; src: string; size: { width: number; height: number } }> = ({
  className,
  src,
  size,
}) => {
  const { frame, asset } = heroAsset();

  return (
    <div className={className}>
      <DashedFrame className={frame} />
      <Image
        src={`/images/hero/marketing-site/${src}.svg`}
        className={asset}
        alt=""
        {...size}
        noFrame
        noCover
        loadingAnimation
      />
    </div>
  );
};

const Asset = () => {
  const { root, image, assetOne, assetTwo, assetThree, assetFour } = heroAsset();

  return (
    <ReactParallaxTilt className={root} perspective={5000} tiltMaxAngleX={8} tiltMaxAngleY={8} gyroscope>
      <Image
        className={image}
        src="/images/hero/marketing-site/marketing-site.svg"
        alt=""
        noFrame
        noCover
        loadingAnimation
      />
      <AssetNode className={assetOne} src="map-window" size={{ width: 676, height: 350 }} />
      <AssetNode className={assetTwo} src="logo-window" size={{ width: 78, height: 70 }} />
      <AssetNode className={assetThree} src="color-window" size={{ width: 62, height: 76 }} />
      <AssetNode className={assetFour} src="nav-icon-window" size={{ width: 52, height: 44 }} />
    </ReactParallaxTilt>
  );
};

export default Asset;
