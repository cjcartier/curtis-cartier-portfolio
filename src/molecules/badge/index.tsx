import { badge } from 'theme/recipes';

import type { FC } from 'react';
import type { Badge as BadgeProps } from 'types/payload-types';

const Badge: FC<BadgeProps> = ({ label }) => {
  const classes = badge();

  return <div className={classes}>{label}</div>;
};

export default Badge;
