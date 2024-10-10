import { defineRecipe } from '@pandacss/dev';

import type { SlotRecipeVariantRecord } from '@pandacss/types';

const switchbackVariants = {
  reversed: {
    true: {
      md: {
        flexDirection: 'row-reverse',
      },
    },
  },
} as SlotRecipeVariantRecord<'switchback'>;

const switchbackRecipe = defineRecipe({
  className: 'switchback',
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    md: {
      flexDirection: 'row',
    },
  },
  variants: switchbackVariants,
  defaultVariants: {
    reversed: false,
  },
  staticCss: ['*'],
});

export default switchbackRecipe;
