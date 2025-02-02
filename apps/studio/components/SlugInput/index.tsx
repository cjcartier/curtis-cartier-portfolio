import { hues } from '@sanity/color';
import { Code, Flex, TextInput } from '@sanity/ui';
import { useCallback } from 'react';
import { set, unset } from 'sanity';

import { useEditableSlug } from '@/components/SlugInput/utils';

import type { FormEvent } from 'react';
import type { Slug, TextInputProps } from 'sanity';

import { useIsDarkMode } from '@/utils/hooks/useIsDarkMode';

// TODO: Can we use tailwind of another style lib?
const SlugInput = ({ value, onChange, ...props }: TextInputProps) => {
  const {
      state: [editedSlug, setEditedSlug],
      options: { slugPrefix, includeSlugPrefixInStoredValue, editablePortion, displayedPrefix },
    } = useEditableSlug(value as Slug | undefined),
    isDarkMode = useIsDarkMode();

  const backgroundColor = isDarkMode ? hues.gray[950].hex : hues.gray[50].hex;
  const borderColor = isDarkMode ? hues.gray[800].hex : hues.gray[200].hex;

  const handleChange = useCallback(
    (evt: FormEvent<HTMLInputElement>) => {
      const editedValue = evt.currentTarget.value;

      if (editedValue.trim() === '') {
        onChange(unset());

        return;
      }

      const fullSlugCurrent = includeSlugPrefixInStoredValue ? `${slugPrefix}/${editedValue}` : editedValue;

      const fullSlug = {
        _type: 'slug',
        current: fullSlugCurrent,
      };

      onChange(set(fullSlug));
      setEditedSlug(editedValue);
    },
    [includeSlugPrefixInStoredValue, slugPrefix, onChange],
  );

  // If the value is changed by another user, update the editedSlug state
  if (editablePortion !== editedSlug) {
    setEditedSlug(editablePortion);
  }

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
          {displayedPrefix}
        </Code>
      </Flex>
      <div style={{ flex: 1 }}>
        <TextInput
          rows={1}
          placeholder="slug"
          onChange={handleChange}
          value={editedSlug}
          {...props}
          style={{
            transform: 'translateX(-2px)',
            flex: 1,
          }}
        />
      </div>
    </Flex>
  );
};

export default SlugInput;
