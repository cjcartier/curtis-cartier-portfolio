const preset = require('@sanity/prettier-config');

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  ...preset,
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'avoid',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  proseWrap: 'always',
  plugins: [...preset.plugins],
};

module.exports = config;
