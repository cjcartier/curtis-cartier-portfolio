import { defineSlotRecipe } from '@pandacss/dev';

const componentHeroRecipe = defineSlotRecipe({
  className: 'hero',
  slots: ['root', 'heading', 'doodle', 'doodleOne', 'doodleTwo'],
  base: {
    root: {
      paddingTop: '92',
    },
    doodle: {
      position: 'absolute',
    },
    doodleOne: {
      top: '20%',
      left: '10%',
    },
    doodleTwo: {
      top: '25%',
      right: '10%',
    },
  },
});

export default componentHeroRecipe;
