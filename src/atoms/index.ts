import { defineTokens } from '@pandacss/dev';

import colors from 'atoms/colors/color';
import shadows from 'atoms/shadows';
import sizes from 'atoms/sizing/sizing';
import spacing from 'atoms/spacing';
import { fontTokens } from 'atoms/typography/typography';

const tokens = defineTokens({
  colors,
  ...fontTokens,
  shadows,
  sizes,
  spacing,
});

export default tokens;
