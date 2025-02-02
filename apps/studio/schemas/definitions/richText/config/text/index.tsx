import type { BlockStyleDefinition } from 'sanity';

const textOptions = [
  { title: 'Normal', value: 'normal' },
  { title: 'Heading 1', value: 'h1' },
  { title: 'Heading 2', value: 'h2' },
  { title: 'Heading 3', value: 'h3' },
  { title: 'Heading 4', value: 'h4' },
  { title: 'Heading 5', value: 'h5' },
  { title: 'Heading 6', value: 'h6' },
  { title: 'Quote', value: 'blockquote' },
] as BlockStyleDefinition[];

export type TextOptions = (typeof textOptions)[number]['value'];

export default textOptions;
