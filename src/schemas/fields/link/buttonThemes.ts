import { defineField } from 'sanity';

export type LinkThemes = keyof typeof themeOptions;

export const themeOptions = {
  fill: {
    title: 'Fill',
    value: 'fill',
  },
  outline: {
    title: 'Outline',
    value: 'outline',
  },
  text: {
    title: 'Text',
    value: 'text',
  },
};

export const buttonThemeField = (theme: LinkThemes[]) => {
  const options = { list: theme.map(appearance => themeOptions[appearance]) };

  return defineField({
    name: 'theme',
    title: 'Theme',
    type: 'string',
    options,
  });
};
