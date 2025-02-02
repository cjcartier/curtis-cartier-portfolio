import { objectEntries } from '@packages/utils/typeUtils';

import conversionPanel from '@/schemas/components/conversionPanel';

import { symbolReference } from '../documents/symbol/reference';

import type { InsertMenuOptions, ObjectDefinition, ReferenceDefinition } from 'sanity';
import hero from './hero';
import portCo from './portco';
import switchback from './switchback';
import testimonials from './testimonials';
import tools from './tools';

type ComponentTypes = 'Intro' | 'Block' | 'Deck' | 'Reusable' | 'Singleton';
type MenuGroups = InsertMenuOptions['groups'];

interface ComponentSchema {
  type: ComponentTypes;
  component: ObjectDefinition | ReferenceDefinition;
}

const componentSchemas = {
  conversionPanel: { type: 'Block', component: conversionPanel },
  hero: { type: 'Intro', component: hero },
  portco: { type: 'Block', component: portCo },
  switchback: { type: 'Block', component: switchback },
  testimonials: { type: 'Block', component: testimonials },
  tools: { type: 'Block', component: tools },
  symbol: {
    type: 'Reusable',
    component: symbolReference,
  },
} as Record<string, ComponentSchema>;

export const components = Object.values(componentSchemas).map(({ component }) => component);
export const componentsByType = objectEntries(componentSchemas).reduce(
  (acc, [key, { type }]) => {
    const typeIndex = acc && acc.findIndex(group => group.name === type);

    if (typeIndex >= 0) {
      acc[typeIndex].of?.push(key);

      return acc;
    }

    return [...acc, { name: type, title: type, of: [key] }];
  },
  [] as Exclude<MenuGroups, undefined | null | never>,
);

export default componentSchemas;
