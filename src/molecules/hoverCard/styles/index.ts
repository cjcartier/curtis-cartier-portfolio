import { defineSlotRecipe } from '@pandacss/dev';

const hoverCardRecipe = defineSlotRecipe({
  className: 'hoverCard',
  slots: ['content', 'icon'],
  base: {
    content: {
      'position': 'relative',
      'background': { base: 'white/30', _dark: 'white/8' },
      'padding': '12px',
      'borderRadius': 'md',
      'zIndex': '10',
      'backdropFilter': 'blur(20px)',

      '_after': {
        content: '""',
        borderRadius: 'md',
        layerStyle: 'frame',
      },

      '--arrow-size': '10px',
      '--arrow-background': { base: 'white/30', _dark: 'token(colors.gray.900)' },

      '& [data-part="arrow-tip"]': {
        top: '1px!',
        border: '1px solid',
        borderColor: { base: '#595959', _dark: 'white/40' },
        clipPath: 'polygon(0% 0%, 0% 100%, 100% 0%)',
        zIndex: '10000',
        display: 'block',
      },
    },
    icon: {
      cursor: 'pointer',
    },
  },
});

export default hoverCardRecipe;
