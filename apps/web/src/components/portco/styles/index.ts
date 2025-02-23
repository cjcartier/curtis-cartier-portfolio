import { defineSlotRecipe } from '@pandacss/dev';

const portcoRecipe = defineSlotRecipe({
  className: 'portco',
  slots: ['root', 'headingContainer', 'brandContainer', 'brand'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '150px',
    },
    headingContainer: {
      display: 'flex',
      flexDirection: 'column',
      maxW: '800px',
    },
    brandContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      alignItems: 'center',
      columnGap: '48px',
      rowGap: '96px',
      sm: {
        gridTemplateColumns: 'repeat(auto-fill, minmax(165px, 1fr))',
      },
    },
    brand: {
      color: { base: 'gray.900', _dark: 'white' },
    },
  },
});

export default portcoRecipe;
