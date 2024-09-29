import { defineSlotRecipe } from '@pandacss/dev';

const toolsRecipe = defineSlotRecipe({
  className: 'tools',
  slots: ['root', 'toolsContainer', 'hiddenTool', 'tool', 'toolLogo', 'hoverCardIcon'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px',

      lg: {
        flexDirection: 'row',
      },
    },
    toolsContainer: {
      position: 'relative',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16px',
      flex: '1 0 40%',
      minW: '345px',
      maxW: '650px',

      lg: {
        minW: '482px',
      },
    },
    hiddenTool: {
      display: 'blocl',

      sm: {
        display: 'none',
      },

      lg: {
        display: 'block',
      },
    },
    tool: {
      'position': 'relative',
      'display': 'flex',
      'alignItems': 'center',
      'justifyContent': 'center',
      'w': '100px',
      'h': '100px',
      'borderRadius': 'lg',
      'backgroundColor': { base: 'white/35', _dark: 'white/10' },
      'transition': 'transform 150ms ease-in-out, backgroundColor 250ms ease-in-out',
      'perspective': '1000px',

      'sm': {
        w: '150px',
        h: '150px',
      },

      '_after': {
        content: '""',
        borderRadius: 'lg',
        layerStyle: 'frame',
      },

      '&.flip-out-right': {
        'animation': 'flipOutRight',
        'animationDuration': '300ms',
        'animationTimingFunction': 'ease-in-out',

        '& svg': {
          animation: 'fadeOut',
          animationDuration: '300ms',
          animationTimingFunction: 'ease-in-out',
        },
      },

      '&.flip-in-right': {
        'animation': 'flipInRight',
        'animationDuration': '300ms',
        'animationTimingFunction': 'ease-in-out',

        '& svg': {
          animation: 'fadeIn',
          animationDuration: '300ms',
          animationTimingFunction: 'ease-in-out',
        },
      },
    },
    toolLogo: {
      w: '60',
      h: '60',

      sm: {
        w: '77',
        h: '77',
      },
    },
    hoverCardIcon: {
      'position': 'absolute',
      'top': '12',
      'right': '12',
      'opacity': '0',
      'transition': 'opacity 250ms ease-in-out',
      '_groupHover': {
        opacity: '1',
      },
      '&[data-state="open"]': {
        opacity: '1',
      },
    },
  },
  staticCss: ['*'],
});

export default toolsRecipe;
