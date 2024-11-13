import { defineTokens } from '@pandacss/dev';

const spacingValues = [
  2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 24, 32, 40, 48, 64, 80, 96, 128, 160, 192, 224, 256,
] as const;

export const spacingMap = spacingValues.reduce(
  (acc, space) => ({
    ...acc,
    [space]: {
      px: { value: `${space}px` },
      rem: { value: `${space / 16}rem` },
      DEFAULT: { value: `${space}px` },
    },
  }),
  {
    0: { DEFAULT: { value: '0' }, rem: { value: '0' } },
  },
);

export const spacing = defineTokens.spacing(spacingMap);
export default spacing;
