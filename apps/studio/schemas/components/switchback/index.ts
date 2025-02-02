import heading from '@/schemas/fields/heading';
import definePageComponent from '@/schemas/definitions/component';
import caseStudySwitchBack from './caseStudy';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

const switchback = definePageComponent({
  name: 'switchback',
  title: 'Switchback',
  icon: HiOutlineSwitchHorizontal,
  fields: [
    heading,
    {
      name: 'switchbacks',
      title: 'Switchbacks',
      type: 'array',
      of: [caseStudySwitchBack],
    },
  ],
});

export default switchback;
