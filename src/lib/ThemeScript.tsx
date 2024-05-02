type Theme = 'light' | 'dark';

declare global {
  interface Window {
    __theme: Theme;
    __onThemeChange: (theme: Theme) => void;
    __setPreferredTheme: (theme: Theme) => void;
  }
}

const code = () => {
  window.__onThemeChange = function () {};

  let preferredTheme;

  const setTheme = (newTheme: Theme) => {
    window.__theme = newTheme;
    preferredTheme = newTheme;
    document.documentElement.dataset.theme = newTheme;
    window.__onThemeChange(newTheme);
  };

  try {
    preferredTheme = localStorage.getItem('theme') as Theme;
  } catch (err) {
    console.error(err);
  }

  window.__setPreferredTheme = function (newTheme: Theme) {
    setTheme(newTheme);
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {
      console.error(err);
    }
  };

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  darkQuery.addEventListener('change', e => {
    window.__setPreferredTheme(e.matches ? 'dark' : 'light');
  });

  setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
};

export const ThemeScript = () => <script dangerouslySetInnerHTML={{ __html: `(${code})();` }} />;

export default ThemeScript;
