import { defineTokens } from '@pandacss/dev';

import { spacingMap } from 'atoms/spacing';

export const containerWidthValues = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const;

export const sizes = defineTokens.sizes({
  100: { value: '100%' },
  ...spacingMap,
  container: {
    sm: { value: `${containerWidthValues.sm}px` },
    md: { value: `${containerWidthValues.md}px` },
    lg: { value: `${containerWidthValues.lg}px` },
    xl: { value: `${containerWidthValues.xl}px` },
  },
});

export default sizes;
