import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import jsxA11Y from 'eslint-plugin-jsx-a11y';
import noInlineStyles from 'eslint-plugin-no-inline-styles';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import preferArrow from 'eslint-plugin-prefer-arrow';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';
import { fixupPluginRules } from '@eslint/compat';

const constructPathGroups = paths =>
  paths.map(path => ({
    pattern: `${path}/**`,
    group: 'internal',
    position: 'after',
  }));

export default tseslint.config([
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    extends: [importPlugin.flatConfigs.recommended, importPlugin.flatConfigs.typescript],
    ignores: ['**/*.config.*'],
    plugins: {
      react: fixupPluginRules(react),
      'jsx-a11y': fixupPluginRules(jsxA11Y),
      'no-inline-styles': noInlineStyles,
      'prefer-arrow': preferArrow,
      'no-relative-import-paths': noRelativeImportPaths,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      parser: tsParser,
      ecmaVersion: 12,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        React: true,
        JSX: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // eslint
      'array-callback-return': [
        'error',
        {
          allowImplicit: true,
          checkForEach: true,
        },
      ],
      'arrow-body-style': ['error', 'as-needed'],
      curly: ['error', 'multi', 'consistent'],
      'eol-last': ['error', 'always'],
      eqeqeq: ['error', 'smart'],
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'func-style': ['error', 'expression'],
      'jsx-quotes': ['error', 'prefer-double'],
      'newline-before-return': 'warn',
      'no-lonely-if': 'error',
      'no-nested-ternary': 'error',
      'no-shadow': [
        'error',
        {
          builtinGlobals: false,
          hoist: 'functions',
        },
      ],
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-var': 'error',
      'object-shorthand': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
        },
      ],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreDeclarationSort: true,
        },
      ],
      'spaced-comment': ['error', 'always'],

      // @typescript-eslint
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'off',

      // eslint-plugin-import
      'import/first': 'error',
      'import/default': 'error',
      'import/no-named-as-default-member': 'warn',
      'import/no-named-default': 'error',
      'import/newline-after-import': 'warn',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
          pathGroups: constructPathGroups([
            '@packages',
            'assets',
            'atoms',
            'molecules',
            'organisms',
            'components',
            'layout',
            'global',
            'templates',
            'lib',
            'utils',
            'constants',
            'data',
            'theme',
          ]),
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
          pathGroupsExcludedImportTypes: ['builtin', 'type'],
          'newlines-between': 'always',
          warnOnUnassignedImports: true,
        },
      ],
      'import/no-unresolved': 'off',

      // react
      'react/destructuring-assignment': 'error',
      'react/display-name': 0,
      'react/function-component-definition': [
        'warn',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'ignore',
          propElementValues: 'always',
        },
      ],
      'react/jsx-filename-extension': [
        2,
        {
          extensions: ['.tsx', '.jsx', '.mdx'],
        },
      ],
      'react/no-array-index-key': 'warn',
      'react/no-unused-prop-types': 1,
      'react/react-in-jsx-scope': 0,
      'react/require-default-props': [
        0,
        {
          forbidDefaultForRequired: true,
        },
      ],

      // prefer-arrow
      'prefer-arrow/prefer-arrow-functions': [
        'warn',
        {
          singleReturnOnly: true,
        },
      ],

      // no-inline-styles
      'no-inline-styles/no-inline-styles': 1,

      // no-relative-import-paths
      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        {
          allowSameFolder: false,
          rootDir: 'src',
        },
      ],
    },
  },
  {
    files: ['**/*.js', '**/*.mjs', '**/*.ts'],
    extends: [eslintPluginPrettierRecommended],
    rules: {
      ...eslintConfigPrettier.rules,
    },
  },
]);
