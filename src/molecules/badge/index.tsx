import { q } from 'groqd';

import { badge } from 'theme/recipes';

import type { Selection, TypeFromSelection } from 'groqd';
import type { FC } from 'react';

export const badgeSelection = {
  _key: q.string(),
  label: q.string().optional(),
} satisfies Selection;

const Badge: FC<TypeFromSelection<typeof badgeSelection>> = ({ label }) => {
  const classes = badge();

  return <div className={classes}>{label}</div>;
};

export default Badge;
