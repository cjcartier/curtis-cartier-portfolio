import { FaRegClone } from 'react-icons/fa6';
import { defineField } from 'sanity';

export const symbolReference = defineField({
  name: 'symbolReference',
  title: 'Symbol',
  icon: FaRegClone,
  type: 'reference',
  to: [{ type: 'symbol' }],
});
