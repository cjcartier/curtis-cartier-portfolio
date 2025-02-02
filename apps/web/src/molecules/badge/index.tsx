import { q } from 'groqd';

import { badge } from 'theme/recipes';

import type { Selection, TypeFromSelection } from 'groqd';
import type { FC } from 'react';

type BadgeProps = TypeFromSelection<typeof badgeSelection>;

const Badge: FC<BadgeProps> = ({ label }) => {
  const classes = badge();

  return <div className={classes}>{label}</div>;
};

export const badgeSelection = {
  _key: q.string(),
  label: q.string().optional(),
} satisfies Selection;

export default Badge;
