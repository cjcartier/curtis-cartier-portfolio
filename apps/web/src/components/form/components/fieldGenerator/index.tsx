import { q } from 'groqd';
import { Controller } from 'react-hook-form';

import TextInput from 'molecules/inputs/text';
import TextArea from 'molecules/inputs/textArea';

import type { Selection, TypeFromSelection } from 'groqd';
import type { Control, ControllerRenderProps, FieldError, FieldErrors } from 'react-hook-form';

export type Field = TypeFromSelection<typeof fieldSelection>;

const generator = (field: Field, control: ControllerRenderProps, error?: Omit<FieldError, 'type'>) => {
  const props = {
    ...field,
    control,
    error: !!error,
    errorText: error?.message?.toString() || '',
  };

  switch (field.inputType) {
    case 'text':
    case 'email':
      return <TextInput key={field.fieldId} {...props} />;
    case 'textArea':
      return <TextArea key={field.fieldId} {...props} />;
    default: {
      console.warn(`[Sanity Forms] - No field for ${field.inputType}`);

      return <></>;
    }
  }
};

const fieldGenerator = (fields: Field[], control: Control, errors: FieldErrors) => {
  if (!fields || fields.length < 1) {
    console.error('[Sanity Forms] - No fields returned');

    return null;
  }

  return fields.map(input => (
    <Controller
      key={input.fieldId}
      name={input.fieldId || ''}
      defaultValue={'defaultValue' in input ? input?.defaultValue : ''}
      control={control}
      render={({ field }) => generator(input, field, errors?.[field.name])}
      rules={{
        required: input?.required || false,
      }}
    />
  ));
};

export const fieldSelection = {
  fieldId: q.string(),
  fieldName: q.string().optional(),
  placeholder: q.string().optional(),
  inputType: q.union([
    q.literal('text'),
    q.literal('email'),
    q.literal('phone'),
    q.literal('textArea'),
    q.literal('file'),
  ]),
  split: q.boolean().optional(),
  required: q.boolean().optional(),
} satisfies Selection;

export default fieldGenerator;
