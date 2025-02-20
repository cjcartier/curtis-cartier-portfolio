import { Selection, TypeFromSelection, q } from 'groqd';

import { hasArrayValues } from '@packages/utils/arrays';

import Brand from 'atoms/brands';

import Heading, { headingSelection } from 'molecules/heading';
import { sectionSelection } from 'molecules/section';

import { portco } from 'theme/recipes';

import type { FC } from 'react';

type PortcoQuery = TypeFromSelection<typeof portcoSelection>;

const Portco: FC<PortcoQuery> = ({ heading, brands }) => {
  const classes = portco();

  return (
    <div className={classes.root}>
      {heading && (
        <div className={classes.headingContainer}>
          <Heading headingType="h2" size="md" alignment="start" {...heading} />
        </div>
      )}
      {hasArrayValues(brands) && (
        <div className={classes.brandContainer}>
          {brands.map(
            brand =>
              brand && <Brand key={brand._id} brand={brand.logoId || ''} height="30px" className={classes.brand} />,
          )}
        </div>
      )}
    </div>
  );
};

export const portcoSelection = {
  _key: q.string(),
  _type: q.literal('portCo'),
  heading: q('heading').grab$(headingSelection).nullable(),
  brands: q('brands').filter().deref().grab$({ _id: q.string(), logoId: q.string().optional().nullable() }),
  ...sectionSelection,
} satisfies Selection;

export default Portco;
