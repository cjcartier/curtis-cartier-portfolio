import { defineSlotRecipe } from '@pandacss/dev';

import generateTransitions from 'utils/styles';

import type { SlotRecipeVariantRecord } from 'theme/types';

export const buttonVariants = {
  size: {
    md: {
      root: {
        'gap': '8',
        'paddingX': '20',
        'paddingY': '10',

        '&[data-icon-only]': {
          paddingX: '10',
        },
      },
      label: {
        textStyle: 'text.md',
      },
    },
    lg: {
      root: {
        gap: '8',
        paddingX: '24',
        paddingY: '14',
      },
      label: {
        textStyle: 'text.xl',
        fontWeight: 'extraBold',
        fontFamily: 'var(--sharp-grotesk)',
      },
    },
  },
  hierarchy: {
    fill: {
      root: {
        bg: { base: 'white/55', _dark: 'white/10' },
        color: { base: 'gray.900', _dark: 'white' },
        _hover: { bg: { base: 'white/65', _dark: 'white/18' }, _after: { backgroundSize: '200%' } },
        _after: {
          content: '""',
          borderRadius: '6px',
          layerStyle: 'frame',
        },
      },
    },
    ghost: {
      root: {
        bg: 'transparent',
        color: { base: 'gray.900', _dark: 'white' },
        _hover: { bg: { base: 'gray.100', _dark: 'gray.100' } },
      },
    },
    text: {},
  },
  color: {},
  noPadding: {
    true: {
      root: {
        padding: '0',
      },
    },
  },
  fullWidth: {
    true: {
      root: { w: '100%' },
    },
  },
  loading: {
    true: {
      root: {
        cursor: 'progress',
        pointerEvents: 'none',

        _before: {
          content: '""',
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          w: '0%',
          backgroundColor: 'blue.300/15',
          borderRadius: '6px',
          animation: 'buttonLoading 1s ease-in-out infinite',
        },
      },
    },
  },
} as SlotRecipeVariantRecord<string>;

export const buttonRecipe = defineSlotRecipe({
  className: 'button',
  slots: ['root', 'label', 'endIcon'],
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
      justifyContent: 'center',
      transition: generateTransitions(['backgroundColor', 'color', 'borderColor'], 250),
      w: '100',
      height: 'fit-content',
      borderRadius: '6px',
      outlineOffset: '2',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      cursor: 'pointer',

      sm: {
        w: 'fit-content',
      },

      _disabled: {
        cursor: 'not-allowed',
      },
    },
    label: {
      color: { base: 'gray.900', _dark: 'white' },
      zIndex: 10,
    },
    endIcon: {
      transition: 'transform ease-in-out 200ms',
    },
  },
  variants: buttonVariants,
  defaultVariants: {
    hierarchy: 'fill',
    size: 'md',
  },
});

export default buttonRecipe;
