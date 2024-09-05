import { Section } from 'atoms/containers/section';

import ConversionPanel from 'components/conversionPanel';
import Hero from 'components/hero';
import Portco from 'components/portco';
import SwitchbackSection from 'components/switchbackSection';
import Testimonials from 'components/testimonials';
import Tools from 'components/tools';

import { arrayValuesExist } from 'utils/arrays';
import { toKebabCase } from 'utils/strings';

import type { PAGE_QUERYResult } from 'lib/sanity/gen/sanity.types';
import type { FC } from 'react';

type Section = StripMaybe<PAGE_QUERYResult>['layout'];

interface componentGeneratorProps {
  sections: Section;
}

const getComponent = (component: StripArray<Section>) => {
  switch (component._type) {
    case 'conversionPanel':
      return <ConversionPanel {...component} />;
    case 'hero':
      return <Hero {...component} />;
    case 'portCo':
      return <Portco {...component} />;
    case 'switchback':
      return <SwitchbackSection {...component} />;
    case 'testimonialComponent':
      return <Testimonials {...component} />;
    case 'toolsComponent':
      return <Tools {...component} />;
    default:
      return null;
  }
};

const ComponentGenerator: FC<componentGeneratorProps> = ({ sections }) => {
  if (arrayValuesExist(sections)) {
    return (
      <>
        {sections.map(section => {
          const { section: sectionProps, _type, _id, ...props } = section;

          return (
            <Section key={_id} id={toKebabCase(props.title || _id)} {...sectionProps}>
              {getComponent(section)}
            </Section>
          );
        })}
      </>
    );
  }

  return null;
};

export default ComponentGenerator;
