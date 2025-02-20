import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

import caseStudySwitchBack from '@/schemas/components/switchback/caseStudy';
import definePageComponent from '@/schemas/definitions/component';
import heading from '@/schemas/fields/heading';

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
  preview: {
    select: {
      title: 'heading.heading',
      subtitle: 'heading.subheading',
    },
  },
});

export default switchback;
