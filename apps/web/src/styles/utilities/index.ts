import { absoluteCover } from 'styles/utilities/absoluteCover';
import { truncate } from 'styles/utilities/truncate';

import type { Config } from '@pandacss/dev';

const utilities: Config['utilities'] = {
  extend: {
    ...absoluteCover,
    ...truncate,
  },
};

export default utilities;
