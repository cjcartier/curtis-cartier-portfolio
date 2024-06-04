import Brand from 'atoms/brands';

import Heading from 'molecules/heading';

import payloadContentExists from 'utils/payloadContentExists';

import { portco } from 'theme/recipes';

import type { FC } from 'react';
import type { PortCo } from 'types/payload-types';

const Portco: FC<PortCo> = ({ heading, brand }) => {
  const classes = portco();

  return (
    <div className={classes.root}>
      {heading && (
        <div className={classes.headingContainer}>
          <Heading headingType="h2" size="md" alignment="start" {...heading?.[0]} />
        </div>
      )}
      {brand && (
        <div className={classes.brandContainer}>
          {brand.map(logo => {
            if (!payloadContentExists(logo)) {
              return null;
            }

            return <Brand key={logo.id} brand={logo.logoId || ''} height="30px" className={classes.brand} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Portco;
