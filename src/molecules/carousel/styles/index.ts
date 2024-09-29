import { defineSlotRecipe } from '@pandacss/dev';

import generateTransitions from 'utils/styles';

const carouselRecipe = defineSlotRecipe({
  className: 'carousel',
  slots: ['root', 'navigationContainer', 'navigationArrows', 'indicatorGroup', 'indicator'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16',
    },
    navigationContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '16',
      w: 'full',
    },
    navigationArrows: {
      cursor: 'pointer',
      color: { base: 'black/40', _dark: 'white/40' },
      transition: 'color 200ms',
    },
    indicatorGroup: {
      display: 'flex',
      gap: '16',
    },
    indicator: {
      'w': '12',
      'h': '12',
      'borderRadius': '12px',
      'backgroundColor': { base: 'black/15', _dark: 'white/15' },
      'cursor': 'pointer',
      'transition': generateTransitions(['backgroundColor', 'width'], 200),

      '&[data-current]': {
        w: '36',
        backgroundColor: { base: 'black/40', _dark: 'white/40' },
      },
    },
  },
});

export default carouselRecipe;
