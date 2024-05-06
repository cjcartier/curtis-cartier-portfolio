import Doodle from 'atoms/doodle';
import Glow from 'atoms/glows';

import Heading from 'molecules/heading';

import Form from 'components/form';

import payloadContentExists from 'utils/payloadContentExists';

import { cx } from 'theme/css';
import { conversionPanel } from 'theme/recipes';

import type { FC } from 'react';
import type { ConversionPanel as ConversionPanelProps } from 'types/payload-types';

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
        {heading && <Heading headingType="h2" alignment="start" size="md" {...heading[0]} />}
        <Doodle doodle="squiggle" className={cx(classes.doodle, classes.doodleTwo)} />
      </div>
      {payloadContentExists(form) && (
        <div className={classes.formWrapper}>
          <Glow temperature="warm" />
          <Form {...form} />
        </div>
      )}
    </div>
  );
};

export default ConversionPanel;
