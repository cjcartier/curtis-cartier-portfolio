import { defineRecipe } from '@pandacss/dev';

import type { RecipeVariantRecord } from '@pandacss/dev';

const glowVariants = {
  temperature: {
    cool: {
      bgGradient: 'coolGlow',
    },
    warm: {
      bgGradient: 'warmGlow',
    },
  },
} satisfies RecipeVariantRecord;

const glowRecipe = defineRecipe({
  className: 'glow',
  base: {
    w: '100',
    h: '100',
    bgGradient: 'coolGlow',
    filter: 'blur(124px)',
    opacity: 0.07,
    absoluteCover: true,
  },
  variants: glowVariants,
  defaultVariants: {
    temperature: 'cool',
  },
});

export default glowRecipe;
