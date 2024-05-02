import type { UtilityConfig } from '@pandacss/types';

export const absoluteCover: UtilityConfig = {
  absoluteCover: {
    className: 'absolute-cover',
    values: { type: 'boolean' },
    transform(value) {
      if (!value) {
        return {};
      }

      return {
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
        height: '100%',
      };
    },
  },
};

export default absoluteCover;
