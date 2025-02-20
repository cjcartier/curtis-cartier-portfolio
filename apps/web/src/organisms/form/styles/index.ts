import { defineSlotRecipe } from '@pandacss/dev';

const formVariants = {
  hasSubmitted: {
    true: {
      root: {
        opacity: 0,
      },
    },
  },
};

const formRecipe = defineSlotRecipe({
  className: 'form',
  slots: ['root', 'title', 'formSubmission', 'submissionTitle', 'submissionDescription'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    title: {
      textStyle: 'display.xs',
      fontWeight: 'extraBold',
    },
    formSubmission: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24',
    },
    submissionTitle: {
      textStyle: 'display.lg',
      fontWeight: 'extraBold',
    },
    submissionDescription: {
      textStyle: 'text.xl',
    },
  },
  variants: formVariants,
  staticCss: ['*'],
});

export default formRecipe;
