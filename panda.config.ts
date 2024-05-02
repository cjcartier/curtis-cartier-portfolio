import { defineConfig } from '@pandacss/dev';

import { atomicRecipes, atomicSlotRecipes, semanticTokens, tokens } from 'atoms';
import globalSlotRecipes from 'global/globalRecipes';
import globalCss from 'styles/global';
import keyframes from 'styles/keyframes';
import layerStyles from 'styles/layerStyles';
import utilities from 'styles/utilities';
import variables from 'styles/variables';

import breakpoints from 'atoms/breakpoints';
import textStyles from 'atoms/typography/typography';

import moleculeSlotRecipes, { moleculeRecipes } from 'molecules/moleculeRecipes';

import componentSlotRecipes from 'components/componentRecipes';

const recipes = { ...atomicRecipes, ...moleculeRecipes };
const slotRecipes = { ...atomicSlotRecipes, ...moleculeSlotRecipes, ...componentSlotRecipes, ...globalSlotRecipes };

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
      recipes,
      slotRecipes,
      layerStyles,
    },
  },
  utilities,
  globalCss,
  globalVars: variables,
  conditions: {
    notLastOfType: '&:not(:last-of-type)',
    extend: {
      dark: '.dark &, [data-theme="dark"] &',
    },
  },
  staticCss: {
    css: [
      {
        properties: {
          filter: ['url(/backgrounds/filters.svg#home-curve)', 'url(/backgrounds/filters.svg#home-curve-dark)'],
        },
      },
    ],
  },
  jsxFramework: 'react',
  gitignore: false,
});
