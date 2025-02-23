import { defineSlotRecipe } from '@pandacss/dev';

const attributionRecipe = defineSlotRecipe({
  className: 'attribution',
  slots: ['root', 'details', 'name', 'position', 'headshot'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      gap: '24',
      sm: {
        flexDirection: 'row',
        alignItems: 'center',
      },
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4',
    },
    name: {
      color: { base: 'gray.900', _dark: 'white' },
      textStyle: 'display.xs',
      fontWeight: 'extraBold',
    },
    position: {
      color: { base: 'gray.900', _dark: 'white' },
      textStyle: 'text.xl',
    },
    headshot: {
      width: '76',
      height: '76',
      borderRadius: 'round',
      overflow: 'hidden',
    },
  },
});

export default attributionRecipe;
