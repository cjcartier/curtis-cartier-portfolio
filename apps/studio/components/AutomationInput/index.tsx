/* eslint-disable no-inline-styles/no-inline-styles */
import { hues } from '@sanity/color';
import { Code, Flex, TextInput } from '@sanity/ui';
import { useEffect, useState } from 'react';
import { useFormValue } from 'sanity';
import { set } from 'sanity';

import type { StringInputProps } from 'sanity';

import { useIsDarkMode } from '@/utils/hooks/useIsDarkMode';

const AutomationInput = ({ ...props }: StringInputProps) => {
  const automation = useFormValue(['automation']),
    [loading, setLoading] = useState(true),
    isDarkMode = useIsDarkMode();

  const backgroundColor = isDarkMode ? hues.gray[950].hex : hues.gray[50].hex,
    borderColor = isDarkMode ? hues.gray[800].hex : hues.gray[200].hex;

  const newProps = {
    ...props,
    elementProps: {
      ...props.elementProps,
      readOnly: true,
      value: automation as string,
    },
    value: automation as string,
  };

  useEffect(() => {
    if (!set || !props.onChange || loading) {
      return;
    }

    props.onChange(set(automation));
  }, [automation]);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Flex>
      <Flex
        direction="column"
        align="center"
        justify="center"
        paddingX={2}
        style={{
          height: '33px',
          backgroundColor,
          borderLeft: `1px solid ${borderColor}`,
          borderTop: `1px solid ${borderColor}`,
          borderBottom: `1px solid ${borderColor}`,
          borderTopLeftRadius: '3px',
          borderBottomLeftRadius: '3px',
        }}
      >
        <Code size={1} muted>
          knap-store/
        </Code>
      </Flex>
      <div style={{ flex: 1 }}>
        <TextInput
          rows={1}
          {...newProps.elementProps}
          style={{
            transform: 'translateX(-2px)',
            flex: 1,
          }}
        />
      </div>
    </Flex>
  );
};

export default AutomationInput;
