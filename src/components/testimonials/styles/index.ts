import { defineSlotRecipe } from '@pandacss/dev';

const testimonialComponentRecipe = defineSlotRecipe({
  className: 'testimonialComponent',
  slots: ['root', 'headerWrapper', 'testimonials'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '64',
    },
    headerWrapper: {
      maxW: '700px',
    },
    testimonials: {},
  },
  staticCss: ['*'],
});

export default testimonialComponentRecipe;
