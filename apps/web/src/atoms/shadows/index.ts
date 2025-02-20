import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

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
  },
  semanticShadowMap = {
    xs: { value: { base: '0px 1px 2px 0px rgba(16, 24, 40, 0.25)', _dark: '0px 1px 2px 0px rgba(16, 24, 40, 0.25)' } },
    sm: {
      value: { base: '0px 2.5px 63px 0px rgba(16, 24, 40, 0.25)', _dark: '0px 2.5px 63px 0px rgba(16, 24, 40, 0.25)' },
    },
    md: {
      value: { base: '0px 0px 28px 0px rgba(16, 24, 40, 0.25)', _dark: '0px 0px 28px 0px rgba(16, 24, 40, 0.25)' },
    },
    lg: {
      value: {
        base: '0px 12.5px 25px 0px rgba(16, 24, 40, 0.25)',
        _dark: '0px 12.5px 25px 0px rgba(16, 24, 40, 0.25)',
      },
    },
    xl: {
      value: { base: '0px 0px 17px 0px rgba(16, 24, 40, 0.25)', _dark: '0px 0px 17px 0px rgba(16, 24, 40, 0.25)' },
    },
  };

const shadows = defineTokens.shadows(shadowMap),
  semanticShadows = defineSemanticTokens.shadows(semanticShadowMap);

export { semanticShadows };
export default shadows;
