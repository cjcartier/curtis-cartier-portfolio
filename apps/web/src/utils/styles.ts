import { camelToKebab } from '@/utils/strings';

import type { CssProperties } from 'theme/types';

/**
 * Generates a string of CSS transition properties for the given properties, timing, and optional timing function.
 *
 * @param props - An array of CSS property names to generate transitions for.
 * @param timing - The duration of the transitions in milliseconds.
 * @param curve - The timing function to use for the transitions (default is 'ease-in-out').
 * @returns A string of CSS transition properties, e.g. 'opacity 300ms ease-in-out,transform 300ms ease-in-out'.
 */
const generateTransitions = (
  props: (keyof CssProperties)[],
  timing: number,
  curve?: CssProperties['animationTimingFunction']
) =>
  props
    .map(
      (prop) => `${camelToKebab(prop)} ${timing}ms ${curve || 'ease-in-out'}`
    )
    .join(', ');

export default generateTransitions;
