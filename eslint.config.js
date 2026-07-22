import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import eslintReact from '@eslint-react/eslint-plugin';
import eslintPluginAstro from 'eslint-plugin-astro';
import * as astroParser from 'astro-eslint-parser';

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  eslintPluginAstro.configs.all,
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    extends: [eslintReact.configs.recommended],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [eslintReact.configs['recommended-typescript']],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
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
]);
