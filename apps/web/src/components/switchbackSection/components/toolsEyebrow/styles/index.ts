import { defineSlotRecipe } from '@pandacss/dev';

const toolsEyebrowRecipe = defineSlotRecipe({
  className: 'toolsEyebrow',
  slots: ['root', 'tool'],
  base: {
    root: {
      display: 'flex',
      flexFlow: 'row wrap',
      gap: '16px',
      alignItems: 'flex-end',
    },
    tool: {
      color: { _dark: 'gray.200', _light: 'gray.700' },
    },
  },
});

export default toolsEyebrowRecipe;
