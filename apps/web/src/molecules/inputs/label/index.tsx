import { cx } from 'theme/css';
import { label as labelStyles } from 'theme/recipes';

import type { TextInputProps } from 'molecules/inputs/text';
import type { FC } from 'react';
import type { ClassStyles } from 'types/global';

interface LabelProps extends ClassStyles, Pick<TextInputProps, 'label' | 'required' | 'name'> {}

const Label: FC<LabelProps> = ({ name, label, required, className, ...props }) => {
  const classes = labelStyles();

  return (
    <label htmlFor={name} className={cx(classes, className)} {...props}>
      {label}
      {required && '*'}
    </label>
  );
};

export default Label;
