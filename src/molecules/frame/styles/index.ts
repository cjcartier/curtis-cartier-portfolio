import { defineRecipe } from '@pandacss/dev';

import type { SlotRecipeVariantRecord } from '@pandacss/dev';

const frameVariants = {
  size: {
    sm: {
      padding: '8',
    },
    md: {
      padding: '16',
      borderRadius: 'xxl',
      sm: {
        padding: '32',
      },
      _after: {
        borderRadius: 'xxl',
      },
    },
    lg: {
      padding: '24',
    },
  },
} as SlotRecipeVariantRecord<'frame'>;

const frameRecipe = defineRecipe({
  className: 'frame',
  base: {
    position: 'relative',
    padding: '16',
    backgroundColor: 'white/10',
    backdropFilter: 'blur(12px)',
    _after: {
      content: '""',
      layerStyle: 'frame',
    },
  },
  variants: frameVariants,
  defaultVariants: {
    size: 'md',
  },
});

export default frameRecipe;
