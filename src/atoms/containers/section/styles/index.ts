import { defineSlotRecipe } from '@pandacss/dev';

import type { SystemStyleObject } from 'theme/types';

export const sectionSizing = {
  maxW: 'container.sm',
  paddingX: '16',
  marginX: 'auto',
  paddingY: '500px',
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

export const sectionRecipe = defineSlotRecipe({
  className: 'section',
  slots: ['root', 'grain', 'container'],
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      w: 'screen',
    },
    grain: {
      absoluteCover: true,
      opacity: '.7',
      backgroundImage: 'var(--background-grain)',
    },
    container: {
      display: 'flex',
      flexDir: 'column',
      w: '100',
      zIndex: 1,
      ...sectionSizing,
    },
  },
});

export default sectionRecipe;
