import Control from 'molecules/inputs/control';
import Label from 'molecules/inputs/label';

import { textInput } from 'theme/recipes';

import type { FC } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

export interface TextInputProps extends HTMLInputElement {
  label?: string;
  control?: ControllerRenderProps;
}

const TextInput: FC<TextInputProps> = ({ label, name, required, control, placeholder, ...props }) => {
  const classes = textInput();

  return (
    <Control>
      {label && <Label name={name} label={label} required={required} />}
      <div className={classes.root}>
        <input name={name} className={classes.input} placeholder={placeholder} {...control} />
      </div>
    </Control>
  );
};

export default TextInput;
