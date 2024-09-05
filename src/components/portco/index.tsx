import Brand from 'atoms/brands';

import Heading from 'molecules/heading';

import { arrayValuesExist } from 'utils/arrays';

import { portco } from 'theme/recipes';

import type { PortCo } from 'lib/sanity/gen/sanity.types';
import type { FC } from 'react';

const Portco: FC<PortCo> = ({ heading, brands }) => {
  const classes = portco();

  return (
    <div className={classes.root}>
      {heading && (
        <div className={classes.headingContainer}>
          <Heading headingType="h2" size="md" alignment="start" {...heading} />
        </div>
      )}
      {arrayValuesExist(brands) && (
        <div className={classes.brandContainer}>
          {brands.map(brand => {
            if (!brand) {
              return null;
            }

            return <Brand key={brand._key} brand={brand.logoId || ''} height="30px" className={classes.brand} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Portco;
