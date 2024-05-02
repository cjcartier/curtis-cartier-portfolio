import { defineSlotRecipe } from '@pandacss/dev';

import type { SlotRecipeVariantRecord } from '@pandacss/dev';

const headingVariants = {
  size: {
    sm: {
      heading: {
        textStyle: 'display.xs',
        sm: {
          textStyle: 'display.sm',
        },
      },
    },
    md: {
      heading: {
        textStyle: 'display.sm',
        sm: {
          textStyle: 'display.lg',
        },
      },
    },
    lg: {
      heading: {
        textStyle: 'display.sm',
        fontWeight: 'extraBold',
        sm: { textStyle: 'display.xl', fontWeight: 'extraBold' },
        lg: { textStyle: 'display.xxl', fontWeight: 'extraBold' },
      },
    },
  },
  alignment: {
    start: {
      root: {
        alignItems: 'flex-start',
        textAlign: 'left',
      },
    },
    center: {
      root: {
        alignItems: 'center',
        textAlign: 'center',
        maxW: '800px',
        marginX: 'auto',
      },
    },
  },
} as SlotRecipeVariantRecord<'heading'>;

const headingRecipe = defineSlotRecipe({
  className: 'heading',
  slots: ['root', 'heading', 'subheading', 'doodle', 'badges', 'buttons'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16',
    },
    heading: {
      position: 'relative',
      textStyle: 'display.lg',
      fontWeight: 'bold',
    },
    doodle: {
      position: 'absolute',
      top: '-14px',
      left: '-24px',
    },
    subheading: {
      textStyle: 'text.lg',
      md: {
        textStyle: 'text.xl',
      },
    },
    badges: {
      display: 'flex',
      flexFlow: 'row nowrap',
      gap: '4',
    },
    buttons: {
      display: 'flex',
      flexFlow: 'row nowrap',
      gap: '4',
    },
  },
  variants: headingVariants,
  defaultVariants: {
    size: 'md',
  },
});

export default headingRecipe;
