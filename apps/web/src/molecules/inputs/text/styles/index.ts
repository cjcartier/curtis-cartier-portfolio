import { defineSlotRecipe } from '@pandacss/dev';

import generateTransitions from '@/utils/styles';

import type { SlotRecipeVariantRecord } from 'theme/types';

const textInputVariants = {
  error: {
    true: {
      root: {
        _after: {
          backgroundColor: 'red.500',
        },
      },
    },
  },
} as SlotRecipeVariantRecord<string>;

const textInputRecipe = defineSlotRecipe({
  className: 'textInput',
  slots: ['root', 'input', 'resizeIcon'],
  base: {
    root: {
      position: 'relative',
      display: 'flex',
      backgroundColor: { base: 'white/40', _dark: 'white/10' },
      borderRadius: 'md',
      paddingInline: '20',
      paddingBlock: '8',
      width: '100%',
      boxShadow: 'none',
      transition: 'box-shadow 150ms ease-in-out',

      _after: {
        content: '""',
        borderRadius: 'md',
        layerStyle: 'frame',
      },

      _focusWithin: {
        boxShadow: 'solid.md',
      },
    },
    input: {
      textStyle: 'text.md',
      fontWeight: 'semibold',
      color: { base: 'gray.900', _dark: 'white' },
      width: '100%',
      resize: 'none',

      _focus: {
        outline: 'none',
      },

      _placeholder: {
        color: { base: 'gray.500', _dark: 'gray.300' },
      },
    },
    resizeIcon: {
      position: 'absolute',
      top: '12px',
      right: '12px',
      color: { base: 'gray.500', _dark: 'gray.300' },
      opacity: 0,
      transition: generateTransitions(['opacity', 'color'], 150),
      cursor: 'pointer',

      _hover: {
        color: { base: 'gray.900', _dark: 'white' },
      },

      _groupHover: {
        opacity: 1,
      },
    },
  },
  variants: textInputVariants,
  staticCss: ['*'],
});

export default textInputRecipe;
