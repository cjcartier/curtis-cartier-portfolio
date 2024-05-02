import Doodle from 'atoms/doodle';

import Heading from 'molecules/heading';

import { cx } from 'theme/css';
import { hero as heroStyles } from 'theme/recipes';

import type { FC } from 'react';
import type { Hero as HeroProps } from 'types/payload-types';

const Hero: FC<HeroProps> = ({ heading }) => {
  const { root, doodle, doodleOne, doodleTwo } = heroStyles();

  return (
    <div className={root}>
      <Doodle doodle="half-hard" className={cx(doodle, doodleOne)} />
      <Doodle doodle="hard" className={cx(doodle, doodleTwo)} />
      {heading && <Heading headingType="h1" size="lg" alignment="center" {...heading?.[0]} />}
    </div>
  );
};

export default Hero;
