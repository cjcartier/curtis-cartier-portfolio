import { defineTokens } from '@pandacss/dev';

const shadowMap = {
  none: {
    value: 'none',
  },
  black: {
    md: { value: '0px 0px 28px rgba(0, 0, 0, 0.25)' },
    lg: { value: '0px 4px 100px rgba(0, 0, 0, 0.25)' },
    lgDim: { value: '0px 4px 100px rgba(0, 0, 0, 0.05)' },
  },
  blue: {
    lg: { value: '0px 0px 36px rgba(68, 77, 107, 0.11)' },
  },
  solid: {
    md: { value: '0px 0px 0px 3px rgba(63, 93, 255, .4)' },
  },
};

const shadows = defineTokens.shadows(shadowMap);

export default shadows;
