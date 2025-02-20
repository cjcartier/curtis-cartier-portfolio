import { defineSlotRecipe } from '@pandacss/dev';

import heroAssetRecipe from 'components/hero/components/asset/styles';

const componentHeroRecipe = defineSlotRecipe({
  className: 'hero',
  slots: ['root', 'heading', 'doodle', 'doodleOne', 'doodleTwo'],
  base: {
    root: {
      paddingTop: '92',
      display: 'flex',
      flexDirection: 'column',
      gap: '32',
      sm: {
        gap: '64',
      },
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

export { heroAssetRecipe };

export default componentHeroRecipe;
