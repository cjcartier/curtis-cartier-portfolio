import { defineRecipe } from '@pandacss/dev';

const labelRecipe = defineRecipe({
  className: 'label',
  base: {
    textStyle: 'text.sm',
    color: { base: 'gray.700', _dark: 'gray.200' },
  },
});

export default labelRecipe;
