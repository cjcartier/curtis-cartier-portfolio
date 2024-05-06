import { defineSlotRecipe } from '@pandacss/dev';

const formRecipe = defineSlotRecipe({
  className: 'form',
  slots: ['root', 'title'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    title: {
      textStyle: 'display.xs',
      fontWeight: 'extraBold',
    },
  },
});

export default formRecipe;
