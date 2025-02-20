import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

import colors, { semanticColors } from 'atoms/colors/color';
import glowRecipe from 'atoms/glows/styles';
import gradients from 'atoms/gradients';
import radii from 'atoms/radii';
import shadows, { semanticShadows } from 'atoms/shadows';
import sizes from 'atoms/sizing/sizing';
import spacing from 'atoms/spacing';
import { fontTokens } from 'atoms/typography/typography';

export const tokens = defineTokens({
  colors,
  ...fontTokens,
  gradients,
  radii,
  shadows,
  sizes,
  spacing,
});

export const semanticTokens = defineSemanticTokens({
  colors: semanticColors,
  shadows: semanticShadows,
});

export const atomicRecipes = {
  glow: glowRecipe,
};
