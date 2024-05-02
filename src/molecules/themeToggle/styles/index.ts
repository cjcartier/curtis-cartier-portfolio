import { defineRecipe } from '@pandacss/dev';

const themeToggleRecipe = defineRecipe({
  className: 'theme-toggle',
  base: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '6',
    borderRadius: 'round',
    color: { base: 'black/25', _dark: 'white/45' },
    backgroundColor: { base: 'black/1', _dark: 'white/5' },
    bgGradient: 'gentleBlue',
    cursor: 'pointer',
    transition: ' fill 150ms ease-in-out, stroke 150ms ease-in-out',
    zIndex: '100',
    _hover: {
      _after: {
        opacity: 1,
      },
    },
    _after: {
      content: '""',
      absoluteCover: true,
      backgroundColor: { base: 'black/1', _dark: 'white/5' },
      bgGradient: 'mediumBlue',
      borderRadius: 'round',
      opacity: 0.3,
      transition: 'opacity 250ms ease-in-out',
    },
  },
});

export default themeToggleRecipe;
