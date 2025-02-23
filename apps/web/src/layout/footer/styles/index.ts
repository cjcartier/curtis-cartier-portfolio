import { defineSlotRecipe } from '@pandacss/dev';

const footerRecipe = defineSlotRecipe({
  className: 'footer',
  slots: [
    'section',
    'glowOne',
    'glowTwo',
    'root',
    'container',
    'logoWrapper',
    'logo',
    'menuContainer',
    'menuWrapper',
    'menuList',
    'menuHeading',
    'menuItem',
    'legalContainer',
    'copyright',
  ],
  base: {
    section: {
      backgroundColor: { base: 'white/35', _dark: 'white/3' },
      backdropFilter: 'blur(42px)',
      borderTop: '1px solid',
      borderColor: { base: 'gray.900/20', _dark: 'white/20' },
      roundedTop: 'md',
    },
    glowOne: { position: 'absolute', w: '7/12', h: '1/2', bottom: '0', right: '0' },
    glowTwo: { position: 'absolute', w: '7/12', h: '1/2', top: '0', left: '0' },
    root: {
      display: 'flex',
      flexFlow: 'column noWrap',
      gap: '48',
      sm: {
        gap: '64',
      },
    },
    container: {
      display: 'flex',
      flexFlow: 'column nowrap',
      justifyContent: 'space-between',
      gap: '36',
      sm: {
        alignItems: 'center',
        flexFlow: 'row nowrap',
      },
    },
    logoWrapper: {
      display: 'flex',
      alignItems: 'center',
      gap: '12',
      textStyle: 'display.xs',
      fontWeight: 'extraBold',
      color: { base: 'gray.900', _dark: 'white' },
    },
    logo: {
      fill: 'currentColor',
    },
    menuContainer: {
      display: 'flex',
      flexFlow: 'row wrap',
      gap: '32',
      justifyContent: 'space-between',
    },
    menuWrapper: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16',
    },
    menuList: {
      display: 'flex',
      flexFlow: 'row nowrap',
      gap: '24',
      lg: {
        flexDirection: 'row',
        gap: '36',
      },
    },
    menuHeading: {
      textStyle: 'text.xl',
      fontWeight: 'bold',
      color: { base: 'gray.900', _dark: 'white' },
    },
    menuItem: {
      textStyle: 'text.lg',
      color: { base: 'gray.700', _dark: 'gray.200' },
    },
    legalContainer: {
      display: 'flex',
      flexFlow: 'column wrap',
      borderTop: '1px solid',
      borderColor: { base: 'gray.900/15', _dark: 'white/15' },
      paddingTop: '48',
      sm: {
        flexDirection: 'row',
        paddingTop: '60',
      },
    },
    copyright: {
      textStyle: 'text.sm',
      color: { base: 'gray.700', _dark: 'gray.200' },
    },
  },
});

export default footerRecipe;
