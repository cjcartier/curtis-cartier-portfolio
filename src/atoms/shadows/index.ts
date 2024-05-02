import { defineTokens } from '@pandacss/dev';

const shadowMap = {
  black: {
    md: { value: '0px 0px 28px rgba(0, 0, 0, 0.25)' },
  },
  blue: {
    lg: { value: '0px 0px 36px rgba(68, 77, 107, 0.11)' },
  },
};

const shadows = defineTokens.shadows(shadowMap);

export default shadows;
