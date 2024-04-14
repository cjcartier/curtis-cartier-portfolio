import { defineSemanticTokens, defineTokens } from '@pandacss/dev';

import colors, { semanticColors } from 'atoms/colors/color';
import shadows from 'atoms/shadows';
import sizes from 'atoms/sizing/sizing';
import spacing from 'atoms/spacing';
import { fontTokens } from 'atoms/typography/typography';
import sectionRecipe from './containers/section/styles';
import gradients from './gradients';

export const tokens = defineTokens({
  colors,
  ...fontTokens,
  gradients,
  shadows,
  sizes,
  spacing,
});

export const semanticTokens = defineSemanticTokens({
  colors: semanticColors,
});

export const atomicSlotRecipes = {
  section: sectionRecipe,
};
