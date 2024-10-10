import Control from 'molecules/inputs/control';
import Label from 'molecules/inputs/label';

import { textInput } from 'theme/recipes';

import type { FC } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

export interface TextInputProps {
  /**
   * The name of the input field.
   */
  name?: string;
  /**
   * The optional label for the text input. Can be a string or null.
   */
  label?: string | null;
  /**
   *  The placeholder text to display in the text input field when it is empty.
   */
  placeholder?: string;
  /**
   *  Indicates whether the input field is required or not. If `true`, the field must be filled out. If `null`, the field is not required.
   */
  required?: boolean | null;
  /**
   * The `control` prop is a `ControllerRenderProps` object that provides access to the form control's state and methods. This is typically used in conjunction with a form library like React Hook Form to manage the state and validation of the text input.
   */
  control?: ControllerRenderProps;
  /**
   * Indicates whether there is an error associated with the text input.
   */
  error?: boolean;
}

const TextInput: FC<TextInputProps> = ({ label, name, required, control, placeholder, error }) => {
  const classes = textInput({ error });

  return (
    <Control>
      {label && <Label name={name} label={label} required={required} />}
      <div className={classes.root}>
        <input id={name} name={name} className={classes.input} placeholder={placeholder} {...control} />
      </div>
    </Control>
  );
};

export default TextInput;
