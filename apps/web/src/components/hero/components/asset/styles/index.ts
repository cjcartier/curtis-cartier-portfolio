import { defineSlotRecipe } from '@pandacss/dev';

const asset = {
  position: 'absolute',
  w: '100%',
  backdropFilter: 'blur(20px)',
  z: '40',

  // transform: 'scale(1.0)',
  // transition: 'transform 0.3s ease',

  // _hover: {
  //   transform: 'scale(1.1)',
  // },
};

const heroAssetRecipe = defineSlotRecipe({
  className: 'hero-asset',
  slots: ['root', 'image', 'frame', 'asset', 'assetOne', 'assetTwo', 'assetThree', 'assetFour'],
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      maxW: '800px',
      aspectRatio: '800/543',
      marginInline: 'auto',
      boxShadow: 'black.lg',
      borderRadius: 'lg',
      transformStyle: 'preserve-3d',
    },
    image: {
      w: '100%',
      h: '100%',
      borderRadius: 'lg',
      overflow: 'hidden',
      backdropFilter: 'blur(20px)',
    },
    frame: {
      position: 'absolute',
      inset: '-10px',
      stroke: 'white/30',
      fill: 'white/5',
      borderRadius: 'sm',
      backdropFilter: 'blur(20px)',
      boxShadow: 'sm',
    },
    asset: {
      borderRadius: 'sm',
      overflow: 'hidden',
    },
    assetOne: {
      ...asset,
      maxW: '676px',
      bottom: '-39px',
    },
    assetTwo: {
      ...asset,
      maxW: '78px',
      left: '-47px',
      top: '20%',
    },
    assetThree: {
      ...asset,
      maxW: '62px',
      right: '-31px',
      top: '30%',
    },
    assetFour: {
      ...asset,
      maxW: '52px',
      right: '20%',
      top: '-12px',
    },
  },
});

export default heroAssetRecipe;
