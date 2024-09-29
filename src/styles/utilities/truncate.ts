import type { UtilityConfig } from '@pandacss/types';

export const truncate: UtilityConfig = {
  truncate: {
    className: 'truncate',
    values: { type: 'number' },
    transform(value) {
      if (!value) {
        return {};
      }

      return {
        'display': '-webkit-box',
        '-webkit-line-clamp': value,
        '-webkit-box-orient': 'vertical',
        'overflow': 'hidden',
      };
    },
  },
};

export default truncate;
