import { defineType } from 'sanity';

const Badge = defineType({
  name: 'badge',
  title: 'Molecule: Badge',
  type: 'document',
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'variant',
      type: 'string',
      options: [
        {
          title: 'Primary',
          value: 'primary',
        },
      ],
    },
  ],
});

export default Badge;
