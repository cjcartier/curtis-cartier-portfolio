import { defineSlotRecipe } from '@pandacss/dev';

const switchbackSectionRecipe = defineSlotRecipe({
  className: 'switchbackSection',
  slots: ['root', 'heading', 'switchbackWrapper', 'switchbacksContainer', 'switchbackMedia', 'mediaOverlay'],
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
    switchbackMedia: {
      position: 'relative',
      flex: '1 0 52%',
      w: '100%',
    },
    mediaOverlay: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      top: '16',
      left: '16',
      right: '16',
      bottom: '16',
      opacity: '0',
      borderRadius: 'md',
      bgGradient: 'overlay',
      backdropFilter: 'blur(3px)',
      transition: 'opacity 250ms ease-in-out',

      sm: {
        top: '32',
        left: '32',
        right: '32',
        bottom: '32',
      },

      _groupHover: {
        opacity: '1',
      },

      _focusWithin: {
        opacity: '1',
      },
    },
  },
});

export default switchbackSectionRecipe;
