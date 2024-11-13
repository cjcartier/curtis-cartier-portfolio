import { q } from 'groqd';
import { getSanityImage } from 'lib/groq';

import Image from 'molecules/image';

import { attribution } from 'theme/recipes';

import type { Selection, TypeFromSelection } from 'groqd';
import type { FC } from 'react';

interface AttributionProps extends TypeFromSelection<typeof personSelection> {}

const Attribution: FC<AttributionProps> = ({ headshot, displayName, company, position }) => {
  const classes = attribution();

  return (
    <div className={classes.root}>
      {headshot && headshot?.asset && (
        <Image image={headshot?.asset} alt={headshot?.alt || ''} noFrame className={classes.headshot} />
      )}
      <div className={classes.details}>
        <h3 className={classes.name}>{displayName}</h3>
        {company && (
          <div
            className={classes.position}
          >{`${position}${company?.companyName ? ` @ ${company?.companyName}` : ''}`}</div>
        )}
      </div>
    </div>
  );
};

export const companySelection = {
  companyName: q.string().optional(),
} satisfies Selection;

export const personSelection = {
  displayName: q.string().optional(),
  headshot: getSanityImage('headshot'),
  position: q.string().optional(),
  company: q('company').deref().grab(companySelection),
} satisfies Selection;

export default Attribution;
