import { q, Selection } from 'groqd';

import { runQuery } from 'lib/client';
import { getComponent } from 'lib/groq';

import Heading, { headingSelection } from 'molecules/heading';

import CaseStudySwitchBack from 'components/switchbackSection/components/caseStudySwitchBack';

import { hasArrayValues } from '@/utils/arrays';

import { switchbackSection } from 'theme/recipes';

import type { FC } from 'react';
import type { ComponentId } from 'types/global';

const SwitchbackSection: FC<ComponentId> = async ({ _id }) => {
  const { root, switchbacksContainer } = switchbackSection();

  const query = getComponent(_id, 'switchback').grab$({
    heading: q.object(headingSelection).optional(),
    switchbacks: q('switchbacks')
      .filter()
      .deref()
      .grabOne$('_id', q.string())
      .nullable(),
  });

  const { switchbacks, heading } = (await runQuery(query))[0];

  return (
    <div className={root}>
      {heading && (
        <Heading headingType='h2' size='md' alignment='center' {...heading} />
      )}
      {hasArrayValues(switchbacks) && (
        <div className={switchbacksContainer}>
          {switchbacks.map(
            (switchback) =>
              switchback && (
                <CaseStudySwitchBack key={switchback} _id={switchback} />
              )
          )}
        </div>
      )}
    </div>
  );
};

export const switchbackSelection = {
  heading: q('heading').grab$(headingSelection),
  switchbacks: q('switchbacks')
    .filter()
    .deref()
    .grabOne$('_id', q.string())
    .nullable(),
} satisfies Selection;

export default SwitchbackSection;
