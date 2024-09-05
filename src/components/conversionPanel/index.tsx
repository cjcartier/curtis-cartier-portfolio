import Doodle from 'atoms/doodle';
import Glow from 'atoms/glows';

import Heading from 'molecules/heading';

import Form from 'components/form';

import { cx } from 'theme/css';
import { conversionPanel } from 'theme/recipes';

import type { ConversionPanel as ConversionPanelProps } from 'lib/sanity/gen/sanity.types';
import type { FC } from 'react';

const ConversionPanel: FC<ConversionPanelProps> = ({ heading, form }) => {
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
          <Form {...form} />
        </div>
      )}
    </div>
  );
};

export default ConversionPanel;
