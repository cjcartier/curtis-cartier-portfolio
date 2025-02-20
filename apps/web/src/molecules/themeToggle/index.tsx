'use client';

import { useEffect, useState } from 'react';

import Icon from 'molecules/icon';

import { themeToggle } from 'theme/recipes';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(global.window?.__theme || 'light');
  const classes = themeToggle();

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    global.window?.__setPreferredTheme(isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return (
    <button onClick={toggleTheme} className={classes}>
      <Icon icon={isDark ? 'moon' : 'sun'} />
    </button>
  );
};

export default ThemeToggle;
