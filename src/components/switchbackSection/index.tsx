import Glow from 'atoms/glows';

import Button from 'molecules/button';
import Heading from 'molecules/heading';
import Image from 'molecules/image';
import Switchback from 'molecules/switchback';

import ToolsEyebrow from 'components/switchbackSection/components/toolsEyebrow';

import { cx } from 'theme/css';
import { switchbackSection } from 'theme/recipes';

import type { Switchback as SwitchbackProps } from 'lib/sanity/gen/sanity.types';
import type { FC } from 'react';
import type { ExtractKey } from 'types/global';

const SB: FC<ExtractKey<SwitchbackProps, 'switchback1'>> = ({ tools, image, heading, reversed, liveSite }) => {
  const { switchbackWrapper, switchbackMedia, mediaOverlay } = switchbackSection();

  return (
    <Switchback reversed={!!reversed} className={switchbackWrapper}>
      <Heading
        headingType="h3"
        size="sm"
        alignment="start"
        {...heading}
        beforeHeading={tools && <ToolsEyebrow tools={tools} />}
      />
      <div className={cx(switchbackMedia, 'group')}>
        <Glow temperature="cool" />
        {image && <Image image={image} alt={image.alt} aspectRatio="14/9" frameColor={image.featuredColor || ''} />}
        {liveSite && (
          <div className={cx(mediaOverlay, 'dark')}>
            <Button label="View Live Site" link={liveSite} hierarchy="ghost" icon="external-link" />
          </div>
        )}
      </div>
    </Switchback>
  );
};

const SwitchbackSection: FC<SwitchbackProps> = ({ heading, switchback1, switchback2 }) => {
  const { root, switchbacksContainer } = switchbackSection();

  return (
    <div className={root}>
      {heading && <Heading headingType="h2" size="md" alignment="center" {...heading} />}

      <div className={switchbacksContainer}>
        <SB {...switchback1} />
        <SB {...switchback2} />
      </div>
    </div>
  );
};

export default SwitchbackSection;
