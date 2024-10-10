import { defineTokens } from '@pandacss/dev';

const gradientsMap = {
  frameDark: {
    value:
      'linear-gradient(39.01deg, rgba(255, 255, 255, 0) 30.88%, rgba(255, 255, 255, 0.4) 79.58%), linear-gradient(31.19deg, rgba(255, 255, 255, 0.4) -1.47%, rgba(255, 255, 255, 0) 46.11%)',
  },
  frameLight: {
    value:
      'linear-gradient(44.75deg, rgba(48, 69, 141, 0.8) -13.72%, rgba(255, 255, 255, 0) 39.77%, rgba(48, 69, 141, 0) 39.77%), linear-gradient(49.76deg, rgba(48, 69, 141, 0) 45.06%, rgba(48, 69, 141, 0.3) 84.22%)',
  },
  coolGlow: { value: 'linear-gradient(90deg, {colors.blue.400} 0%, {colors.pink.300} 100%)' },
  warmGlow: { value: 'linear-gradient(63.31deg, {colors.red.300} 22.15%, {colors.yellow.700} 81.34%)' },
  gentleBlue: { value: 'linear-gradient(84deg, rgba(63, 93, 255, 0) 0%, rgba(63, 93, 255, .09) 100%)' },
  mediumBlue: { value: 'linear-gradient(84deg, rgba(63, 93, 255, 0) 0%, rgba(63, 93, 255, .2) 100%)' },
  overlay: { value: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)' },
};

const gradients = defineTokens.gradients(gradientsMap);

export default gradients;
