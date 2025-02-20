import { BlockContentIcon } from '@sanity/icons';

import definePageComponent from '@/schemas/definitions/component';
import heading from '@/schemas/fields/heading';

const hero = definePageComponent({
  name: 'hero',
  title: 'Hero',
  icon: BlockContentIcon,
  fields: [heading],
  preview: {
    select: {
      title: 'heading.heading',
      subtitle: 'heading.subheading',
    },
  },
});

export default hero;
