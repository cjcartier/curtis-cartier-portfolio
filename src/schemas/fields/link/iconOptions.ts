import { defineField } from 'sanity';

import { objectKeys } from 'utils/typeUtils';

export const iconOptions = {
  none: {
    label: 'None',
    value: 'none',
  },
  mail: {
    label: 'Mail',
    value: 'mail',
  },
  gitHub: {
    label: 'GitHub',
    value: 'gitHub',
  },
  linkedIn: {
    label: 'LinkedIn',
    value: 'linkedIn',
  },
  externalLink: {
    label: 'External Link',
    value: 'externalLink',
  },
} as const;

const linkIconOptions = objectKeys(iconOptions).map(iconOption => ({
  title: iconOptions[iconOption].label,
  value: iconOptions[iconOption].value,
}));

export const linkIconField = defineField({
  name: 'icon',
  title: 'Icon',
  type: 'string',
  options: { list: linkIconOptions },
});
