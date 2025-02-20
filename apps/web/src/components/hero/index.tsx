import { Selection, TypeFromSelection, q } from 'groqd';

import Doodle from 'atoms/doodle';

import Heading, { headingSelection } from 'molecules/heading';
import { sectionSelection } from 'molecules/section';

import { cx } from 'theme/css';
import { hero as heroStyles } from 'theme/recipes';

import type { FC } from 'react';

type HeroQuery = TypeFromSelection<typeof heroSelection>;

const Hero: FC<HeroQuery> = ({ heading }) => {
  const { root, doodle, doodleOne, doodleTwo } = heroStyles();

  return (
    <div className={root}>
      <Doodle doodle="half-hard" className={cx(doodle, doodleOne)} />
      <Doodle doodle="hard" className={cx(doodle, doodleTwo)} />
      {heading && <Heading headingType="h1" size="lg" alignment="center" {...heading} />}
      {/* <Asset /> */}
    </div>
  );
};

export const heroSelection = {
  _key: q.string(),
  _type: q.literal('hero'),
  heading: q('heading').grab$(headingSelection).nullable(),
  ...sectionSelection,
} satisfies Selection;

export default Hero;
