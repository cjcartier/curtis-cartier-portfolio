import { defineRecipe } from '@pandacss/dev';

const controlRecipe = defineRecipe({
  className: 'control',
  base: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
});

export default controlRecipe;
