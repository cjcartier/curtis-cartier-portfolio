import Glow from 'atoms/glows';

import Heading from 'molecules/heading';
import Image from 'molecules/image';
import Switchback from 'molecules/switchback';

import { arrayValuesExist } from 'utils/arrays';
import payloadContentExists from 'utils/payloadContentExists';

import { switchbackSection } from 'theme/recipes';

import type { FC } from 'react';
import type { Switchback as SwitchbackProps } from 'types/payload-types';

const SwitchbackSection: FC<SwitchbackProps> = ({ heading, switchbacks }) => {
  const { root, switchbackWrapper, switchbacksContainer, switchbackMedia } = switchbackSection();

  return (
    <div className={root}>
      {heading && <Heading headingType="h2" size="md" alignment="center" {...heading?.[0]} />}
      {arrayValuesExist(switchbacks) && (
        <div className={switchbacksContainer}>
          {switchbacks.map(switchback => (
            <Switchback key={switchback.id} reversed={!!switchback.reversed} className={switchbackWrapper}>
              <Heading headingType="h3" size="sm" alignment="start" {...switchback?.content?.[0]} />
              <div className={switchbackMedia}>
                <Glow temperature="cool" />
                {payloadContentExists(switchback.media) && (
                  <Image
                    src={switchback.media.url || ''}
                    alt={switchback.media.alt}
                    aspectRatio="14/9"
                    frameColor={switchback.media.featuredColor || ''}
                  />
                )}
              </div>
            </Switchback>
          ))}
        </div>
      )}
    </div>
  );
};

export default SwitchbackSection;
