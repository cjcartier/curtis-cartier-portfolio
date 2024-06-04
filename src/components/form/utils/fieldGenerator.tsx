import { Controller } from 'react-hook-form';

import TextInput from 'molecules/inputs/text';
import TextArea from 'molecules/inputs/textArea';

import type { Control, ControllerRenderProps, FieldError, FieldErrors } from 'react-hook-form';
import type { Form } from 'types/payload-types';
import type { ArrayElement } from 'utils/typeUtils';

type FieldTypes = ArrayElement<StripMaybe<Form['fields']>>;

const generator = (field: FieldTypes, control: ControllerRenderProps, error?: Omit<FieldError, 'type'>) => {
  const props = {
    ...field,
    control,
    error: !!error,
    errorText: error?.message?.toString() || '',
  };

  switch (field.blockType) {
    case 'text':
    case 'email':
      return <TextInput key={field.name} {...props} />;
    case 'textarea':
      return <TextArea key={field.name} {...props} />;
    default: {
      console.warn(`[HubForm] - No field for ${field.blockType}`);

      return <></>;
    }
  }
};

const fieldGenerator = (fields: Form['fields'], control: Control, errors: FieldErrors) => {
  if (!fields || fields.length < 1) {
    console.error('[HubForm] - No fields returned');

    return null;
  }

  return fields.map(input => {
    if (input.blockType === 'message') {
      return null;
    }

    return (
      <Controller
        key={input.id}
        name={input.name || ''}
        defaultValue={'defaultValue' in input ? input?.defaultValue : ''}
        control={control}
        render={({ field }) => generator(input, field, errors?.[field.name])}
        rules={{
          required: input?.required || false,
        }}
      />
    );
  });
};

export default fieldGenerator;
