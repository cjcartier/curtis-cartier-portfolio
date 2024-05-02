import { defineSlotRecipe } from '@pandacss/dev';

import { sectionSizing } from 'atoms/containers/section/styles';

const headerRecipe = defineSlotRecipe({
  className: 'header',
  slots: ['root', 'headerWrapper', 'logoWrapper', 'logo'],
  base: {
    root: {
      paddingY: '24px',
      zIndex: '100',
      position: 'fixed',
      w: '100',
    },
    headerWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: '18px 20px',
      backdropFilter: 'blur(60px)',
      backgroundColor: { base: 'white/20', _dark: 'white/3' },
      borderRadius: 'lg',
      boxShadow: 'black.md',
      ...sectionSizing,
      _after: {
        content: '""',
        layerStyle: 'frame',
        borderRadius: 'lg',
      },
    },
    logoWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '12',
      textStyle: 'display.sm',
      color: { base: 'gray.900', _dark: 'white' },
    },
    logo: {
      fill: 'currentColor',
    },
  },
});

export default headerRecipe;
