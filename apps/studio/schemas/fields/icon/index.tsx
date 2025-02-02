import { defineField } from 'sanity';

import { iconIds } from '@packages/ui/icons';

import Icon from '@/components/Icon';

const icon = defineField({
  name: 'icon',
  title: 'Icon',
  type: 'iconPicker',
  options: {
    collapsible: false,
    configurations: [
      {
        title: 'Icons',
        provider: 'webstacks',
        icons: () =>
          iconIds.map(iconId => ({
            name: iconId,
            component: () => <Icon size={24} icon={iconId} />,
            tags: [iconId],
          })),
      },
    ],
  },
  preview: {
    select: {
      provider: 'icon.provider',
      name: 'icon.name',
    },
    prepare: sanityIcon => ({
      title: sanityIcon.provider,
      subtitle: sanityIcon.name,
    }),
  },
});

export default icon;
