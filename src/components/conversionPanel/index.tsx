import { q } from 'groqd';

import { runQuery } from 'lib/sanity/client';
import { getComponent } from 'lib/sanity/utils/groq';

import Doodle from 'atoms/doodle';
import Glow from 'atoms/glows';

import Heading, { headingSelection } from 'molecules/heading';

import Form, { formSelection } from 'components/form';

import { cx } from 'theme/css';
import { conversionPanel } from 'theme/recipes';

import type { FC } from 'react';
import type { ComponentId } from 'types/global';

const ConversionPanel: FC<ComponentId> = async ({ _id }) => {
  const classes = conversionPanel();

  const query = getComponent(_id, 'conversionPanel').grab$({
    heading: q.object(headingSelection),
    form: q('form').deref().grab(formSelection),
  });

  const { heading, form } = (await runQuery(query))[0];

  return (
    <div className={classes.root}>
      <div className={classes.headingWrapper}>
        <Doodle doodle="half-hard" className={cx(classes.doodle, classes.doodleOne)} />
        <Glow temperature="cool" />
        <div className={classes.headingFrame}>
          <Doodle doodle="hard" className={cx(classes.doodle, classes.doodleThree)} />
        </div>
        {heading && <Heading headingType="h2" alignment="start" size="md" {...heading} />}
        <Doodle doodle="squiggle" className={cx(classes.doodle, classes.doodleTwo)} />
      </div>
      {form && (
        <div className={classes.formWrapper}>
          <Glow temperature="warm" />
          {form && <Form {...form} />}
        </div>
      )}
    </div>
  );
};

export default ConversionPanel;
