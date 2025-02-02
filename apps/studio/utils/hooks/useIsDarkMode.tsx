import { useTheme_v2 } from '@sanity/ui';

export const useIsDarkMode = () => {
  const theme = useTheme_v2();

  return theme.color._dark;
};
