import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import react from '@eslint-react/eslint-plugin';
import astro from 'eslint-plugin-astro';
import * as astroParser from 'astro-eslint-parser';
import unusedImports from 'eslint-plugin-unused-imports';

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.all,

  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    files: ['**/*.jsx'],
    extends: [react.configs.recommended],
  },

  {
    files: ['**/*.tsx'],
    extends: [react.configs['recommended-typescript']],
  },

  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      'astro/no-unsafe-inline-scripts': 'off',
    },
  },

  {
    plugins: {
      'unused-imports': unusedImports,
    },

    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
]);
