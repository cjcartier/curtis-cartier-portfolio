import { defineConfig } from '@pandacss/dev';

import { tokens, atomicSlotRecipes, semanticTokens } from 'atoms';

import breakpoints from 'atoms/breakpoints';
import keyframes from 'atoms/keyframes';
import layerStyles from 'atoms/layerStyles';
import textStyles from 'atoms/typography/typography';
import utilities from 'atoms/utilities';
import variables from 'atoms/variables';
import moleculeSlotRecipes from 'molecules/moleculeRecipes';

const slotRecipes = { ...atomicSlotRecipes, ...moleculeSlotRecipes };

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  outdir: 'src/theme',
  theme: {
    breakpoints,
    keyframes,
    textStyles,
    tokens,
    semanticTokens,
    extend: {
      slotRecipes,
      layerStyles,
    },
  },
  utilities,
  globalCss: {
    h1: {
      color: 'bodyCopy',
    },
  },
  globalVars: variables,
  jsxFramework: 'react',
  gitignore: false,
});
