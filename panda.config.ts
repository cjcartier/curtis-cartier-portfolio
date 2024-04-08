import { defineConfig } from '@pandacss/dev';

import tokens from 'atoms';

import breakpoints from 'atoms/breakpoints';
import keyframes from 'atoms/keyframes';
import textStyles from 'atoms/typography/typography';

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
    // extend: {
    //   slotRecipes,
    // },
  },
  jsxFramework: 'react',
  gitignore: false,
});
