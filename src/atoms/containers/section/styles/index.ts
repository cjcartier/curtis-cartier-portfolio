import { defineSlotRecipe } from '@pandacss/dev';

import type { SlotRecipeVariantRecord } from '@pandacss/dev';
import type { SystemStyleObject } from 'theme/types';

export const sectionSizing = {
  maxW: 'container.sm',
  paddingX: '16',
  sm: {
    maxW: 'container.md',
    paddingX: '32',
  },
  md: {
    maxW: 'container.lg',
  },
  lg: {
    maxW: 'container.xl',
  },
} satisfies SystemStyleObject;

export const sectionVariants = {
  paddingTop: {
    small: { root: { pt: '24' } },
    medium: { root: { pt: '32' } },
    large: {},
    xLarge: { root: { pt: '48', md: { pt: '88' }, lg: { pt: '136' } } },
  },
  paddingBottom: {
    small: { root: { pb: '24' } },
    medium: { root: { pb: '32' } },
    large: {},
  },
} as SlotRecipeVariantRecord<string>;
export const sectionRecipe = defineSlotRecipe({
  className: 'section',
  slots: ['root', 'grain', 'container'],
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      w: 'screen',
    },
    grain: {
      absoluteCover: true,
      opacity: '.7',
      backgroundImage: 'var(--background-grain)',
    },
    container: {
      position: 'relative',
      display: 'flex',
      flexDir: 'column',
      w: '100',
      zIndex: 1,
      ...sectionSizing,
    },
  },
  variants: sectionVariants,
  defaultVariants: {
    paddingTop: 'medium',
    paddingBottom: 'medium',
  },
  staticCss: ['*'],
});

export default sectionRecipe;
