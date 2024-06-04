import { Section } from 'atoms/containers/section';

import ConversionPanel from 'components/conversionPanel';
import Hero from 'components/hero';
import Portco from 'components/portco';
import SwitchbackSection from 'components/switchbackSection';
import Testimonials from 'components/testimonials';
import Tools from 'components/tools';

import payloadContentExists from 'utils/payloadContentExists';
import { toKebabCase } from 'utils/strings';

import type { FC } from 'react';
import type { Hero as HeroProps, Page, Switchback, TestimonialComponent } from 'types/payload-types';

const components = {
  conversionPanel: ConversionPanel,
  hero: Hero,
  switchback: SwitchbackSection,
  portCo: Portco,
  testimonialComponent: Testimonials,
  toolsComponent: Tools,
} as const;

interface componentGeneratorProps {
  sections: Page['layout'];
}

const getComponent = (component: keyof typeof components, props: HeroProps | Switchback | TestimonialComponent) => {
  switch (component) {
    case 'conversionPanel':
      return <ConversionPanel {...props} />;
    case 'hero':
      return <Hero {...props} />;
    case 'portCo':
      return <Portco {...props} />;
    case 'switchback':
      return <SwitchbackSection {...props} />;
    case 'testimonialComponent':
      return <Testimonials {...props} />;
    case 'toolsComponent':
      return <Tools {...props} />;
    default:
      return null;
  }
};

const ComponentGenerator: FC<componentGeneratorProps> = ({ sections }) => {
  const hasSections = sections && Array.isArray(sections) && sections.length > 0;

  if (hasSections) {
    return (
      <>
        {sections.map((section, ind) => {
          const { value, relationTo } = section;

          if (!payloadContentExists(value) || !(relationTo in components)) {
            return null;
          }

          const { section: sectionProps, ...props } = value;

          return (
            <Section key={value.id} id={toKebabCase(value.title || `${relationTo}-${ind}`)} {...sectionProps}>
              {getComponent(relationTo, props)}
            </Section>
          );
        })}
      </>
    );
  }

  return null;
};

export default ComponentGenerator;
