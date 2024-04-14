import { Block } from 'payload/types';
import Button from '../button';
import Badge from '../badge';

const Heading: Block = {
  slug: 'heading',
  interfaceName: 'Heading',
  fields: [
    {
      name: 'badges',
      type: 'blocks',
      blocks: [Badge],
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
    },
  ],
};

export default Heading;
