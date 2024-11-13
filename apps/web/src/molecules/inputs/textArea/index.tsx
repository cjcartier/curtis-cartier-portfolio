import { type FC, useState } from 'react';

import Icon from 'atoms/icon';

import Control from 'molecules/inputs/control';
import Label from 'molecules/inputs/label';

import { cx } from 'theme/css';
import { textInput } from 'theme/recipes';

import type { TextInputProps } from 'molecules/inputs/text';

interface TextAreaProps extends TextInputProps {}

// TODO: char count
const TextArea: FC<TextAreaProps> = ({ label, name, required, control, placeholder }) => {
  const classes = textInput();
  const [size, setSize] = useState(5);

  return (
    <Control>
      {label && <Label name={name} label={label} required={required} />}
      <div className={cx(classes.root, 'group')}>
        <Icon icon="expand" className={classes.resizeIcon} size="16" onClick={() => setSize(size !== 5 ? 5 : 15)} />
        <textarea
          id={name}
          name={name}
          className={classes.input}
          placeholder={placeholder}
          maxLength={5000}
          spellCheck
          rows={size}
          {...control}
        />
      </div>
    </Control>
  );
};

export default TextArea;
