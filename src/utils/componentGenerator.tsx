import { Section } from 'atoms/containers/section';

import Hero from 'components/hero';
import SwitchbackSection from 'components/switchbackSection';
import Testimonials from 'components/testimonials';
import Tools from 'components/tools';

import { toKebabCase } from 'utils/strings';

import type { FC } from 'react';
import type { Hero as HeroProps, Page, Switchback, TestimonialComponent } from 'types/payload-types';

const components = {
  hero: Hero,
  switchback: SwitchbackSection,
  testimonialComponent: Testimonials,
  toolsComponent: Tools,
} as const;

interface componentGeneratorProps {
  sections: Page['layout'];
}

const getComponent = (component: keyof typeof components, props: HeroProps | Switchback | TestimonialComponent) => {
  switch (component) {
    case 'hero':
      return <Hero {...props} />;
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
          const { section: sectionProps, ...props } = value;

          if (!(relationTo in components)) {
            return null;
          }

          if (value && relationTo in components) {
            return (
              <Section key={value.id} id={toKebabCase(value.title || `${relationTo}-${ind}`)} {...sectionProps}>
                {getComponent(relationTo, props)}
              </Section>
            );
          }

          return null;
        })}
      </>
    );
  }

  return null;
};

export default ComponentGenerator;
