import type { BlockMarksDefinition } from 'sanity';

type FontWeights = { title: string; value: string; icon: string };

const strong = {
  title: 'Strong',
  value: 'strong',
};

// TODO: Find better ways to display font weights
const fontWeights = [
  { title: 'Regular', value: 'font-normal', icon: 'R' },
  { title: 'Medium', value: 'font-medium', icon: 'M' },
  { title: 'Semibold', value: 'font-semibold', icon: 'SB' },
  { title: 'Bold', value: 'font-bold', icon: 'B' },
] as FontWeights[];

export const weightDecorator = fontWeights.map(({ title, value, icon }) => ({
  title,
  value,
  icon: () => <span>{icon}</span>,
})) as BlockMarksDefinition[];

export default strong;
