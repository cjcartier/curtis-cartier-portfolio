import { cx } from 'theme/css';
import { type SwitchbackVariant, switchback } from 'theme/recipes';

import type { FC } from 'react';
import type { PassThroughProps } from 'types/global';

interface SwitchbackProps extends SwitchbackVariant, PassThroughProps {}

const Switchback: FC<SwitchbackProps> = ({ reversed, className, children }) => {
  const classes = switchback({ reversed });

  return <div className={cx(classes, className)}>{children}</div>;
};

export default Switchback;
