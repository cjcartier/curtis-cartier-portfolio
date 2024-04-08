import { absoluteCover } from 'atoms/utilities/absoluteCover';
import { truncate } from 'atoms/utilities/truncate';

import type { Config } from '@pandacss/dev';

const utilities: Config['utilities'] = {
  extend: {
    ...absoluteCover,
    ...truncate,
  },
};

export default utilities;
