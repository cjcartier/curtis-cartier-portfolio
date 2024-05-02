import { glow } from 'theme/recipes';

import type { FC } from 'react';

interface GlowProps {
  temperature: 'cool' | 'warm';
}

const Glow: FC<GlowProps> = ({ temperature }) => {
  const classes = glow({ temperature });

  return <div className={classes} />;
};

export default Glow;
