import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },

  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    semi: true,
    arrowParens: 'always',
  }),

  {
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      '@stylistic/jsx-sort-props': [
        'error',
        {
          noSortAlphabetically: true,
          ignoreCase: true,
          callbacksLast: true,
          shorthandFirst: true,
          multiline: 'last',
          reservedFirst: ['key'],
          reservedLast: ['className'],
        },
      ],
    },
  },
]);
