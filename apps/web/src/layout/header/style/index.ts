import { defineSlotRecipe } from '@pandacss/dev';

import { sectionSizing } from 'molecules/section/styles';

const headerRecipe = defineSlotRecipe({
  className: 'header',
  slots: ['root', 'headerWrapper', 'logoWrapper', 'logo'],
  base: {
    root: {
      display: 'flex',
      justifyContent: 'center',
      paddingY: '24px',
      zIndex: '1000',
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
      w: '100',
      marginInline: '16',

      ...sectionSizing,

      md: {
        marginInline: '32',
        ...sectionSizing.md,
      },

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
      textStyle: 'text.xl',
      fontWeight: 'extraBold',
      fontFamily: 'display',
      color: { base: 'gray.900', _dark: 'white' },
      md: {
        textStyle: 'display.sm',
        fontWeight: 'extraBold',
      },
    },
    logo: {
      fill: 'currentColor',
    },
  },
});

export default headerRecipe;
