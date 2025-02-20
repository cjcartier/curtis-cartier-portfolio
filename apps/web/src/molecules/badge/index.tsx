import { badge } from 'theme/recipes';

import type { FC } from 'react';

interface BadgeProps {
  label: string;
}
const Badge: FC<BadgeProps> = ({ label }) => {
  const classes = badge();

  return <div className={classes}>{label}</div>;
};

export default Badge;
