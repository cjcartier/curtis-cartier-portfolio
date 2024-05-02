import Badge from 'payload/blocks/badge';
import Button from 'payload/blocks/button';

import type { Block } from 'payload/dist/fields/config/types';

const Heading: Block = {
  slug: 'heading',
  interfaceName: 'HeadingBlock',
  fields: [
    {
      name: 'badges',
      type: 'blocks',
      blocks: [Badge],
      admin: {
        initCollapsed: true,
      },
    },
    {
      name: 'doodle',
      type: 'select',
      options: ['hard', 'half-hard', 'squiggle'],
    },
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      label: 'Subheading',
      type: 'richText',
    },
    {
      name: 'buttons',
      type: 'blocks',
      blocks: [Button],
      admin: {
        initCollapsed: true,
      },
    },
  ],
};

export default Heading;
