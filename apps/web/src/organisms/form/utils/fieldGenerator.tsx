import { type Dispatch, type FC, type SetStateAction, useEffect } from 'react';
import { Controller } from 'react-hook-form';

import { hasArrayValues } from '@packages/utils/arrays';

import TextInput from 'molecules/inputs/text';
import TextArea from 'molecules/inputs/textArea';

import { css } from 'theme/css';

import type { Field, FieldGroups, FieldObjectIds } from 'organisms/form/types';
import type { Control, ControllerRenderProps, FieldError, FieldErrors, FieldValues } from 'react-hook-form';

export interface FieldGeneratorProps {
  fieldGroups: FieldGroups[];
  control: Control<FieldValues, unknown>;
  errors: FieldErrors<FieldValues>;
  fieldObjectIds: FieldObjectIds[];
  setFieldObjectIds: Dispatch<SetStateAction<FieldObjectIds[]>>;
}

interface GeneratorProps extends Omit<FieldGeneratorProps, 'fieldGroups' | 'control' | 'errors'> {
  field: Field;
  control: ControllerRenderProps;

  error: FieldError;
}

const Generator: FC<GeneratorProps> = ({ field, control, error, fieldObjectIds, setFieldObjectIds }) => {
  const props = {
    ...field,
    control,
    error: !!error,
    errorText: error?.message?.toString() || '',
  };

  useEffect(() => {
    if (!fieldObjectIds.some(obj => obj['fieldName'] === field.name))
      setFieldObjectIds([...fieldObjectIds, { fieldName: field.name, objectTypeId: field.objectTypeId }]);
  }, []);

  // if (field.hidden) {
  //   return <HiddenInput key={field.name} {...props} />;
  // }

  switch (field.fieldType) {
    case 'textarea':
      return <TextArea key={field.name} {...props} />;
    case 'text':
      return <TextInput key={field.name} {...props} />;
    // case 'select':
    //   return <DropDown key={field.name} options={field.options} {...props} />;
    // case 'phonenumber':
    //   return <PhoneInput key={field.name} {...props} />;
    // case 'number':
    //   return <NumberInput key={field.name} {...props} />;
    // case 'booleancheckbox':
    //   return <Checkbox key={field.name} {...props} />;
    // case 'checkbox': {
    //   return <CheckboxGroup key={field.name} {...props} />;
    // }
    case 'file':
    case 'date':
    case 'radio':
    default: {
      console.warn(`[HubForm] - No field for ${field.fieldType}`);

      return <></>;
    }
  }
};

const FieldGenerator: FC<FieldGeneratorProps> = ({
  fieldGroups,
  control,
  errors,
  fieldObjectIds,
  setFieldObjectIds,
}) => {
  if (!hasArrayValues(fieldGroups)) {
    console.error('[HubForm] - No fields returned');

    return null;
  }

  return fieldGroups.map((group, ind) => (
    <div
      key={group.fields[0].name || ind}
      data-key={group.fields[0].name || ind}
      className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}
    >
      {group.fields.map((input, i) => (
        <Controller
          key={input.name || i}
          name={input.name || ''}
          defaultValue={input.defaultValue ?? ''}
          control={control}
          render={({ field }) => (
            <Generator
              field={input}
              control={field}
              error={errors?.[field.name] as FieldError}
              fieldObjectIds={fieldObjectIds}
              setFieldObjectIds={setFieldObjectIds}
            />
          )}
          rules={{
            required: input?.required || false,
          }}
        />
      ))}
    </div>
  ));
};

export default FieldGenerator;
