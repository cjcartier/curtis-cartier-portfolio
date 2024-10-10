import { q } from 'groqd';

import { runQuery } from 'lib/client';
import { getComponent } from 'lib/groq';

import Doodle from 'atoms/doodle';

import Heading, { headingSelection } from 'molecules/heading';

import { cx } from 'theme/css';
import { hero as heroStyles } from 'theme/recipes';

import type { FC } from 'react';
import type { ComponentId } from 'types/global';

const Hero: FC<ComponentId> = async ({ _id }) => {
  const { root, doodle, doodleOne, doodleTwo } = heroStyles();

  const query = getComponent(_id, 'hero').grab$({
    heading: q.object(headingSelection),
  });

  const { heading } = (await runQuery(query))[0];

  return (
    <div className={root}>
      <Doodle doodle="half-hard" className={cx(doodle, doodleOne)} />
      <Doodle doodle="hard" className={cx(doodle, doodleTwo)} />
      {heading && <Heading headingType="h1" size="lg" alignment="center" {...heading} />}
    </div>
  );
};

export default Hero;
