import { q } from 'groqd';

import { runQuery } from 'lib/sanity/client';
import { getComponent } from 'lib/sanity/utils/groq';

import Brand from 'atoms/brands';

import Heading, { headingSelection } from 'molecules/heading';

import { hasArrayValues } from 'utils/arrays';

import { portco } from 'theme/recipes';

import type { FC } from 'react';
import type { ComponentId } from 'types/global';

const Portco: FC<ComponentId> = async ({ _id }) => {
  const classes = portco();

  const query = getComponent(_id, 'portCo').grab$({
    heading: q.object(headingSelection),
    brands: q('brands').filter().deref().grab$({
      _id: q.string(),
      logoId: q.string(),
    }),
  });

  const data = (await runQuery(query))[0];

  return (
    <div className={classes.root}>
      {data?.heading && (
        <div className={classes.headingContainer}>
          <Heading headingType="h2" size="md" alignment="start" {...data.heading} />
        </div>
      )}
      {hasArrayValues(data?.brands) && (
        <div className={classes.brandContainer}>
          {data.brands.map(
            brand =>
              brand && <Brand key={brand._id} brand={brand.logoId || ''} height="30px" className={classes.brand} />,
          )}
        </div>
      )}
    </div>
  );
};

export default Portco;
