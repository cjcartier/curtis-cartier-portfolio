import { cx } from 'theme/css';
import { control } from 'theme/recipes';

import type { FC } from 'react';
import type { PassThroughProps } from 'types/global';

interface ControlProps extends PassThroughProps {}

const Control: FC<ControlProps> = ({ children, className }) => {
  const classes = control();

  return <div className={cx(classes, className)}>{children}</div>;
};

export default Control;
