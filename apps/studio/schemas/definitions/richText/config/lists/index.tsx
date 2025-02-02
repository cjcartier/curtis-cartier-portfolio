import { DotIcon } from '@sanity/icons';
import { CircleIcon } from '@sanity/icons';
import { Flex, Text } from '@sanity/ui';

import type { BlockListDefinition } from 'sanity';

const listOptions = [
  { title: 'Bullet', value: 'bullet', icon: <DotIcon /> },
  {
    title: 'Light Bullet',
    value: 'lightBullet',
    icon: <CircleIcon />,
    component: ({ children }) => (
      <Flex align="center" gap={1} style={{ paddingBlock: '0.25rem', marginLeft: '-24px' }}>
        <DotIcon />
        <Text>{children}</Text>
      </Flex>
    ),
  },
  { title: 'Numbered', value: 'number' },
] as BlockListDefinition[];

export type ListOptions = (typeof listOptions)[number]['value'];

export default listOptions;
