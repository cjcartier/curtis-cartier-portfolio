import { Selection, TypeFromSelection, q } from 'groqd';

import Glow from 'atoms/glows';

import Button from 'molecules/button';
import Heading, { headingSelection } from 'molecules/heading';
import Image from 'molecules/image';
import { externalLinkSelection } from 'molecules/link';
import Switchback from 'molecules/switchback';

import ToolsEyebrow from 'components/switchback/components/toolsEyebrow';

import { getSanityImage } from 'lib/groq';

import { cx } from 'theme/css';
import { switchbackSection } from 'theme/recipes';

import type { FC } from 'react';

type CaseStudySwitchBackQuery = TypeFromSelection<typeof caseStudySwitchBackSelection>;
const CaseStudySwitchBack: FC<CaseStudySwitchBackQuery> = ({ tools, image, heading, reversed, link }) => {
  const { switchbackWrapper, switchbackMedia, mediaOverlay } = switchbackSection();

  return (
    <Switchback reversed={!!reversed} className={switchbackWrapper}>
      {heading && (
        <Heading
          headingType="h3"
          size="sm"
          alignment="start"
          {...heading}
          beforeHeading={tools && <ToolsEyebrow tools={tools} />}
        />
      )}
      <div className={cx(switchbackMedia, 'group')}>
        <Glow temperature="cool" />
        {image && (
          <Image image={image} alt={image.alt || ''} aspectRatio="14/9" frameColor={image.featuredColor || ''} />
        )}
        {link.href && (
          <div className={cx(mediaOverlay, 'dark')}>
            <Button label="View Site" link={link.href} hierarchy="ghost" icon="external-link" />
          </div>
        )}
      </div>
    </Switchback>
  );
};

export const caseStudySwitchBackSelection = {
  heading: q('heading').grab$(headingSelection).nullable(),
  image: getSanityImage('image'),
  reversed: q.boolean().optional(),
  link: q('link').grab$(externalLinkSelection),
  tools: q('tools').filter().deref().grab$({ _id: q.string(), logoId: q.string() }),
} satisfies Selection;

export default CaseStudySwitchBack;
