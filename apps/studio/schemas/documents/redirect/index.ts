import { defineType } from 'sanity';

const redirect = defineType({
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  fields: [
    {
      name: 'from',
      title: 'From',
      type: 'string',
      validation: Rule =>
        Rule.required().custom((name: string) => (!name.startsWith('/') ? 'Must start with a slash' : true)),
    },
    {
      name: 'to',
      title: 'To',
      type: 'string',
      validation: Rule =>
        Rule.required().custom((name: string) => (!name.startsWith('/') ? 'Must start with a slash' : true)),
    },
    {
      name: 'permanent',
      title: 'Permanent',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      from: 'from',
      to: 'to',
    },
    prepare: ({ from, to }) => ({
      title: `From ${from} to ${to}`,
    }),
  },
});

export default redirect;
