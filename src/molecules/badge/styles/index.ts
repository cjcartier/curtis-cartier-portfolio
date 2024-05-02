import { defineRecipe } from '@pandacss/dev';

const badgeRecipe = defineRecipe({
  className: 'badge',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    textStyle: 'text.md',
    color: { base: 'gray.900', _dark: 'white' },
    paddingBlock: '6px',
    paddingInline: '20px',
    backgroundColor: { base: 'white/10', _dark: 'black/1' },
    bgGradient: 'gentleBlue',
    borderRadius: 'lg',
    backdropFilter: 'blur(60px)',
    boxShadow: 'blue.lg',
    _after: {
      content: '""',
      borderRadius: 'lg',
      layerStyle: 'frame',
    },
  },
});

export default badgeRecipe;
