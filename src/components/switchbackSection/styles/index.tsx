import { defineSlotRecipe } from '@pandacss/dev';

const switchbackSectionRecipe = defineSlotRecipe({
  className: 'switchbackSection',
  slots: ['root', 'heading', 'switchbackWrapper', 'switchbacksContainer', 'switchbackContent', 'switchbackMedia'],
  base: {
    root: {
      display: 'flex',
      flexFlow: 'column nowrap',
      gap: '64',
      sm: {
        gap: '96',
      },
    },
    switchbacksContainer: {
      display: 'flex',
      flexFlow: 'column nowrap',
      gap: '96',
    },
    switchbackWrapper: {
      alignItems: 'center',
      gap: '72',
      w: '100%',
    },
    switchbackContent: {},
    switchbackMedia: {
      position: 'relative',
      flex: '1 0 52%',
      w: '100%',
    },
  },
});

export default switchbackSectionRecipe;
