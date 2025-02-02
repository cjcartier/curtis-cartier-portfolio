import { InferType, q } from 'groqd';
import dynamic from 'next/dynamic';

import { hasArrayValues } from '@packages/utils/arrays';

import { Section } from 'molecules/section';
import { splitSectionProps } from 'molecules/section/utils';

import { conversionPanelSelection } from 'components/conversionPanel';
import { heroSelection } from 'components/hero';
import { portcoSelection } from 'components/portco';
import { switchbackSelection } from 'components/switchback';
import { testimonialComponentSelection } from 'components/testimonials';
import { toolsComponentSelection } from 'components/tools';

import type { FC } from 'react';

const ConversionPanel = dynamic(() => import('components/conversionPanel')),
  Hero = dynamic(() => import('components/hero')),
  Portco = dynamic(() => import('components/portco')),
  SwitchbackSection = dynamic(() => import('components/switchback')),
  Testimonials = dynamic(() => import('components/testimonials')),
  Tools = dynamic(() => import('components/tools'));

export type ComponentProps = InferType<typeof _>;
export type ComponentPropsWithSymbols = InferType<typeof componentGeneratorQuery>;

interface ComponentGeneratorProps {
  sections: ComponentPropsWithSymbols;
}

const getComponent = (component: StripArray<StripMaybe<ComponentProps>>) => {
  switch (component._type) {
    // case 'conversionPanel':
    //   return <ConversionPanel {...component} />;
    case 'hero':
      return <Hero {...component} />;
    // case 'portCo':
    //   return <Portco {...component} />;
    // case 'switchback':
    //   return <SwitchbackSection {...component} />;
    // case 'testimonialComponent':
    //   return <Testimonials {...component} />;
    // case 'toolsComponent':
    //   return <Tools {...component} />;
    default:
      return null;
  }
};

const ComponentGenerator: FC<ComponentGeneratorProps> = ({ sections }) => {
  if (hasArrayValues(sections))
    return (
      <>
        {hasArrayValues(sections) &&
          sections.map(section => {
            const { sectionProps, rest } = splitSectionProps(section),
              key = '_key' in section ? section._key : section._id;

            return section._type === 'symbol' ? (
              <ComponentGenerator key={key} sections={section.content} />
            ) : (
              <Section key={key} {...sectionProps}>
                {getComponent(rest)}
              </Section>
            );
          })}
      </>
    );

  return null;
};

export const componentGeneratorCondition = {
  // '_type == "conversionPanel"': conversionPanelSelection,
  '_type == "hero"': heroSelection,
  // '_type == "portCo"': portcoSelection,
  // '_type == "switchback"': switchbackSelection,
  // '_type == "testimonialComponent"': testimonialComponentSelection,
  // '_type == "toolsComponent"': toolsComponentSelection,
  default: {
    _type: q.literal('default'),
    _key: q.string(),
  },
};

export const componentGeneratorConditionWithSymbol = {
  ...componentGeneratorCondition,
  '_type == "symbol"': {
    _id: q.string(),
    _type: q.literal('symbol'),
    name: q.string(),
    content: q('content').filter().select(componentGeneratorCondition).nullable(),
  },
  '_type == "symbolReference"': q('@')
    .deref()
    .grab$({
      _type: q.string(),
      _id: q.string(),
      name: q.string(),
      content: q('content').filter().select(componentGeneratorCondition).nullable(),
    }),
};

const _ = q('').filter().select(componentGeneratorCondition).nullable();
export const componentGeneratorQuery = q('body').filter().select(componentGeneratorConditionWithSymbol).nullable();

export default ComponentGenerator;
