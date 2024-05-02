import { defineSlotRecipe } from '@pandacss/dev';

const hoverCardRecipe = defineSlotRecipe({
  className: 'hoverCard',
  slots: ['content', 'icon'],
  base: {
    content: {
      position: 'relative',
      background: { base: 'white/30', _dark: 'white/8' },
      padding: '12px',
      borderRadius: 'md',
      zIndex: '10',
      backdropFilter: 'blur(20px)',

      _after: {
        content: '""',
        borderRadius: 'md',
        layerStyle: 'frame',
      },

      '--arrow-size': '10px',
      '--arrow-background': { base: 'white/30', _dark: 'token(white/8)' },
    },
    icon: {
      cursor: 'pointer',
    },
  },
});

export default hoverCardRecipe;
