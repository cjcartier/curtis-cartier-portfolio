import { defineTokens } from '@pandacss/dev';

const radii = defineTokens.radii({
  xs: { value: '2px' },
  sm: { value: '4px' },
  md: { value: '8px' },
  lg: { value: '16px' },
  xl: { value: '20px' },
  xxl: { value: '28px' },
  round: { value: '50%' },
});

export default radii;
