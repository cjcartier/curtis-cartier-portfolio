import { cx } from 'theme/css';
import { frame } from 'theme/recipes';

import type { FC } from 'react';
import type { FrameVariant } from 'theme/recipes';
import type { PassThroughProps } from 'types/global';

interface FrameProps extends FrameVariant, PassThroughProps {
  frameColor?: string;
}

const Frame: FC<FrameProps> = ({ size, children, frameColor, className }) => {
  const classes = frame({ size });

  return (
    <div
      className={cx(classes, className)}
      style={{ backgroundColor: `color-mix(in srgb, ${frameColor} 10%, white 3%)` }}
    >
      {children}
    </div>
  );
};

export default Frame;
