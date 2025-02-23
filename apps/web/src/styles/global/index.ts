import { defineGlobalStyles } from '@pandacss/dev';

const globalCss = defineGlobalStyles({
  html: {
    scrollBehavior: 'smooth',
  },
  'html, body': {
    overflowX: 'hidden',
  },
  body: {
    colorScheme: { base: 'light', _dark: 'dark' },
    bgColor: { base: 'white', _dark: 'black' },
    transition: 'background-color 100ms ease-in-out',
  },
  'h1, h2, h3, h4, h5, h6': {
    color: 'heading',
    transition: 'color 100ms ease-in-out',
  },
  'p, a, span, div, li': {
    color: 'bodyCopy',
    transition: 'color 100ms ease-in-out',
  },
});

export default globalCss;
