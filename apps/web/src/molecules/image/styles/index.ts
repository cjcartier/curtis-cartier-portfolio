const imageRecipe = {
  class: 'image',
  base: {},
  variants: {
    loadingAnimation: {
      true: {
        root: {
          opacity: '0',
          scale: '0.5',
          transition: 'all 0.3s ease-in-out',

          '&.loaded': {
            opacity: '1',
            scale: '1',
          },
        },
      },
    },
  },
};

export default imageRecipe;
