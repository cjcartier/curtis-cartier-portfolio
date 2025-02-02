// WIP - Attempting to create decorators that will just be for heading levels
// Problem is that the other decorators would need to deselect when one is selected
// Also, is there a way that we can have this affect the whole block?

import type { ElementType } from 'react';
import type { BlockDecoratorDefinition, BlockDecoratorProps } from 'sanity';

const HighlightIcon = (level: number) => <span>H{level}</span>;

const HighlightDecorator = ({ children, value }: BlockDecoratorProps) => {
  const Component = value as ElementType;

  return <Component style={{ display: 'inline-block' }}>{children}</Component>;
};

const h1 = {
  title: 'Heading 1',
  value: 'h1',
  icon: HighlightIcon(1),
  component: HighlightDecorator,
} satisfies BlockDecoratorDefinition;

const h2 = {
  title: 'Heading 2',
  value: 'h2',
  icon: HighlightIcon(2),
  component: HighlightDecorator,
} satisfies BlockDecoratorDefinition;

const h3 = {
  title: 'Heading 3',
  value: 'h3',
  icon: HighlightIcon(3),
  component: HighlightDecorator,
} satisfies BlockDecoratorDefinition;

const h4 = {
  title: 'Heading 4',
  value: 'h4',
  icon: HighlightIcon(4),
  component: HighlightDecorator,
} satisfies BlockDecoratorDefinition;

const h5 = {
  title: 'Heading 5',
  value: 'h5',
  icon: HighlightIcon(5),
  component: HighlightDecorator,
} satisfies BlockDecoratorDefinition;

const h6 = {
  title: 'Heading 6',
  value: 'h6',
  icon: HighlightIcon(6),
  component: HighlightDecorator,
} satisfies BlockDecoratorDefinition;

const headingSelector = [h1, h2, h3, h4, h5, h6];

export default headingSelector;
