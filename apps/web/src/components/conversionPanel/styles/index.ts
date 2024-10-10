import { defineSlotRecipe } from '@pandacss/dev';

import { containerWidthValues } from 'atoms/sizing/sizing';

const conversionPanelRecipe = defineSlotRecipe({
  className: 'conversionPanel',
  slots: [
    'root',
    'headingWrapper',
    'headingFrame',
    'formWrapper',
    'formTitle',
    'doodle',
    'doodleOne',
    'doodleTwo',
    'doodleThree',
  ],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '48px',
      paddingBottom: '32px',

      lg: {
        gap: '0',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    },
    headingWrapper: {
      paddingTop: '88px',
      paddingRight: '134px',
      paddingLeft: '32',
      borderRadius: 'lg',
      w: '100',

      lg: {
        paddingRight: '64',
        paddingBottom: '88px',
        position: 'relative',
        w: 'unset',
      },
    },
    headingFrame: {
      display: 'none',
      h: '100',
      w: '100',
      maxW: 'calc(100dvw - 64px - 70px)',
      marginLeft: '32',
      borderRadius: 'lg',
      backgroundColor: 'white/3',
      backdropFilter: 'blur(42px)',
      boxShadow: 'black.lg',
      absoluteCover: true,

      sm: {
        display: 'block',
      },

      lg: {
        marginLeft: 'unset',
        w: 'calc(100dvw - 64px)',
        maxW: `calc(${containerWidthValues.xl}px - 64px)`,
      },

      _after: {
        content: '""',
        borderRadius: 'lg',
        layerStyle: 'frame',
      },
    },
    formWrapper: {
      position: 'relative',
      borderRadius: 'lg',
      padding: '32',
      flex: '1 0 50%',
      w: 'calc(100% - 32px)',
      backgroundColor: 'white/3',
      backdropFilter: 'blur(105px)',
      boxShadow: 'black.lgDim',
      zIndex: '10',

      sm: {
        marginLeft: '32px',
      },

      lg: {
        marginRight: '64',
        marginLeft: 'unset',
      },

      _after: {
        content: '""',
        borderRadius: 'lg',
        layerStyle: 'frame',
      },
    },
    doodle: {
      position: 'absolute',
      zIndex: '100',
    },
    doodleOne: {
      top: '-12',
      left: '16',

      lg: {
        left: '-12',
      },
    },
    doodleTwo: {
      bottom: '32',
      left: '64',

      lg: {
        bottom: '-12',
        right: '-12',
        left: 'unset',
      },
    },
    doodleThree: {
      top: '-16',
      right: '0',

      lg: {
        right: '60',
      },
    },
  },
});

export default conversionPanelRecipe;
