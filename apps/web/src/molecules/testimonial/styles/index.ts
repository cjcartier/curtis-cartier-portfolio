import { defineSlotRecipe } from '@pandacss/dev';

const testimonialRecipe = defineSlotRecipe({
  className: 'testimonial',
  slots: ['root', 'topContainer', 'expandButton', 'copy'],
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '24',
      padding: '32',
      borderRadius: 'lg',
      backdropFilter: 'blur(42px)',
      backgroundColor: { base: 'white/35', _dark: 'white/3' },

      _after: {
        content: '""',
        borderRadius: 'lg',
        layerStyle: 'frame',
      },
    },
    topContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: '24',
      w: '100%',
    },
    expandButton: {
      cursor: 'pointer',
      w: 'fit-content',
      position: 'absolute',
      top: '32',
      right: '32',
      lg: {
        position: 'relative',
        top: 'unset',
        right: 'unset',
        opacity: '0',
        transition: 'opacity 200ms ease-in-out',

        _focusVisible: {
          opacity: '1',
        },

        _groupHover: {
          transitionDelay: '250ms',
          opacity: '1',
        },
      },
    },
    copy: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24',
      textStyle: 'text.xl',
      color: { base: 'gray.900', _dark: 'white' },

      '&[data-truncated="expanded"]': {
        animation: 'expandTestimonial',
      },

      '&[data-truncated="collapsed"]': {
        truncate: 6,
        animation: 'collapseTestimonial',

        '& > p': {
          _notLastOfType: {
            marginBottom: '24',
          },
        },
      },
    },
  },
});

export default testimonialRecipe;
