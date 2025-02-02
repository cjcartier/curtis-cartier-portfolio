import { Card, Heading, Stack, Text } from '@sanity/ui';

import type { StringInputProps } from 'sanity';

import { namedColors } from '@/styles/colors';
import { useIsDarkMode } from '@/utils/hooks/useIsDarkMode';

type CalloutUIOptions = StringInputProps['schemaType']['options'] & {
  heading?: string;
  body?: string;
};

const CalloutCard = ({ schemaType }: StringInputProps) => {
  const { options = {} } = schemaType,
    { heading, body } = options as CalloutUIOptions,
    isDarkMode = useIsDarkMode();

  const backgroundColor = namedColors[isDarkMode ? 'dark' : 'light'].sharedComponent.bg;
  const borderColor = namedColors[isDarkMode ? 'dark' : 'light'].sharedComponent.border;

  return (
    <Card
      paddingX={4}
      paddingY={5}
      border
      style={{
        backgroundColor,
        borderColor,
      }}
    >
      <Stack space={4}>
        {heading && <Heading size={1}>{heading}</Heading>}
        {body && <Text size={1}>{body}</Text>}
      </Stack>
    </Card>
  );
};

export default CalloutCard;
