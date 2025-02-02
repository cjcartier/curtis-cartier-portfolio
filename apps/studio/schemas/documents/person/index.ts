import { UserIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

import defineImage from '@/schemas/definitions/image';

const person = defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  icon: UserIcon,

  fieldsets: [
    {
      name: 'name',
      title: 'Name',
      options: { columns: 2 },
    },
    {
      name: 'employment',
      title: 'Employment',
    },
    {
      name: 'socialMediaUrls',
      title: 'Social Media Links',
    },
  ],
  fields: [
    defineField({
      name: 'firstName',
      title: 'First',
      type: 'string',
      fieldset: 'name',
      validation: rule => rule.required().warning('You must provide a first name for this person.'),
    }),
    defineField({
      name: 'lastName',
      title: 'Last',
      type: 'string',
      fieldset: 'name',
      validation: rule => rule.required().warning('You must provide a last name for this person.'),
    }),
    defineField({
      name: 'position',
      type: 'string',
    }),
    defineImage({
      name: 'headshot',
      title: 'Headshot',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'reference',
      to: [{ type: 'company' }],
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      role: 'role',
      companyName: 'company.name',
      media: 'headshot',
    },
    prepare({ firstName, lastName, role, companyName, media }) {
      const title = [firstName, lastName].filter(i => i).join(' ');

      let subtitle: string[] | string = [role, companyName];

      if (role && companyName) {
        subtitle = subtitle.join(' | ');
      } else {
        subtitle = subtitle.filter(i => i).join('');
      }

      return {
        title,
        subtitle,
        media,
      };
    },
  },
});

export default person;
