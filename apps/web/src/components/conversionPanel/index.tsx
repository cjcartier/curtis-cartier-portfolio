import { Selection, TypeFromSelection, q } from 'groqd';

import Doodle from 'atoms/doodle';
import Glow from 'atoms/glows';

import Heading, { headingSelection } from 'molecules/heading';
import { sectionSelection } from 'molecules/section';

import Form from 'organisms/form';
import { hubspotFormSelection } from 'organisms/form/query';

import { cx } from 'theme/css';
import { conversionPanel } from 'theme/recipes';

import type { FC } from 'react';

type ConversionPanelQuery = TypeFromSelection<typeof conversionPanelSelection>;

const ConversionPanel: FC<ConversionPanelQuery> = ({ heading, form }) => {
  const classes = conversionPanel();

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

export const conversionPanelSelection = {
  _key: q.string(),
  _type: q.literal('conversionPanel'),
  heading: q('heading').grab$(headingSelection),
  form: q('form').deref().grab(hubspotFormSelection),
  ...sectionSelection,
} satisfies Selection;

export default ConversionPanel;
