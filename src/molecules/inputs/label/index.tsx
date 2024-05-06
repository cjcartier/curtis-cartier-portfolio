import { cx } from 'theme/css';
import { label as labelStyles } from 'theme/recipes';

import type { FC } from 'react';
import type { ClassStyles } from 'types/global';

interface LabelProps extends ClassStyles {
  name: string;
  label: string;
  required?: boolean;
}

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
