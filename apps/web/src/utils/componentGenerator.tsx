import { type Selection, type TypeFromSelection, q } from 'groqd';
import dynamic from 'next/dynamic';

import { Section, sectionSelection } from '@/atoms/containers/section';

import { hasArrayValues } from '@/utils/arrays';
import { toKebabCase } from '@/utils/strings';

import type { FC } from 'react';
import { conversionPanelSelection } from 'components/conversionPanel';
import { heroSelection } from 'components/hero';
import { portcoSelection } from 'components/portco';
import { switchbackSelection } from 'components/switchbackSection';
import { testimonialComponentSelection } from 'components/testimonials';
import { toolsComponentSelection } from 'components/tools';

const ConversionPanel = dynamic(() => import('components/conversionPanel')),
  Hero = dynamic(() => import('components/hero')),
  Portco = dynamic(() => import('components/portco')),
  SwitchbackSection = dynamic(() => import('components/switchbackSection')),
  Testimonials = dynamic(() => import('components/testimonials')),
  Tools = dynamic(() => import('components/tools'));

type Section = TypeFromSelection<typeof componentGeneratorSelection>;

interface componentGeneratorProps {
  sections: Section[];
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
  if (hasArrayValues(sections)) {
    return (
      <>
        {sections.map((section) => {
          const { section: sectionProps, _type, _id, ...props } = section;

          return (
            <Section
              key={_id}
              id={toKebabCase(props.title || _id)}
              {...sectionProps}
            >
              {getComponent(section)}
            </Section>
          );
        })}
      </>
    );
  }

  return null;
};

export const componentGeneratorCondition = {
  '_type == "conversionPanel"': conversionPanelSelection,
  '_type == "hero"': heroSelection,
  '_type == "portCo"': portcoSelection,
  '_type == "switchback"': switchbackSelection,
  '_type == "testimonialComponent"': testimonialComponentSelection,
  '_type == "toolsComponent"': toolsComponentSelection,
  default: {
    _type: q.literal('default'),
    _key: q.string(),
  },
};

export const componentGeneratorSelection = {
  _id: q.string(),
  title: q.string().optional(),
  _type: q.union([
    q.literal('conversionPanel'),
    q.literal('hero'),
    q.literal('portCo'),
    q.literal('switchback'),
    q.literal('testimonialComponent'),
    q.literal('toolsComponent'),
  ]),
  section: q.object(sectionSelection).optional(),
} satisfies Selection;

export default ComponentGenerator;
