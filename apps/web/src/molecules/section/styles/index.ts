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
    none: { root: { pt: '0' } },
    small: { root: { pt: '24' } },
    medium: { root: { pt: '32' } },
    large: { root: { pt: '48' } },
    xLarge: { root: { pt: '48', md: { pt: '88' }, lg: { pt: '136' } } },
  },
  paddingBottom: {
    none: { root: { pb: '0' } },
    small: { root: { pb: '24' } },
    medium: { root: { pb: '32' } },
    large: { root: { pb: '48', lg: { pb: '96' } } },
    xLarge: { root: { pb: '48', md: { pb: '88' }, lg: { pb: '136' } } },
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
      zIndex: 0,
    },
    container: {
      position: 'relative',
      display: 'flex',
      flexDir: 'column',
      w: '100',
      zIndex: 4,
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
