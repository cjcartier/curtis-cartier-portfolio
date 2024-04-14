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
};

const gradients = defineTokens.gradients(gradientsMap);

export default gradients;
