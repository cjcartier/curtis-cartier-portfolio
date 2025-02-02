import { Selection, TypeFromSelection, q } from 'groqd';

import { hasArrayValues } from '@packages/utils/arrays';

import Heading, { headingSelection } from 'molecules/heading';
import { sectionSelection } from 'molecules/section';

import CaseStudySwitchBack, {
  caseStudySwitchBackSelection,
} from 'components/switchback/components/caseStudySwitchBack';

import { switchbackSection } from 'theme/recipes';

import type { FC } from 'react';

type SwitchbackQuery = TypeFromSelection<typeof switchbackSelection>;

const SwitchbackSection: FC<SwitchbackQuery> = ({ switchbacks, heading }) => {
  const { root, switchbacksContainer } = switchbackSection();

  return (
    <div className={root}>
      {heading && <Heading headingType="h2" size="md" alignment="center" {...heading} />}
      {hasArrayValues(switchbacks) && (
        <div className={switchbacksContainer}>
          {switchbacks.map(switchback => switchback && <CaseStudySwitchBack key={switchback._key} {...switchback} />)}
        </div>
      )}
    </div>
  );
};

export const switchbackSelection = {
  _id: q.string(),
  _key: q.string(),
  heading: q('heading').grab$(headingSelection),
  switchbacks: q('switchbacks')
    .filter()
    .grab$({ _key: q.string(), ...caseStudySwitchBackSelection }),
  ...sectionSelection,
} satisfies Selection;

export default SwitchbackSection;
