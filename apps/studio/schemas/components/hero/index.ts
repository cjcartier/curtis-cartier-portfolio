import heading from '@/schemas/fields/heading';
import definePageComponent from '@/schemas/definitions/component';
import { BlockContentIcon } from '@sanity/icons';

const hero = definePageComponent({
  name: 'hero',
  title: 'Hero',
  icon: BlockContentIcon,
  fields: [heading],
});

export default hero;
