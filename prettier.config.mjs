/** @type {import('prettier').Config} */

export default {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  arrowParens: 'always',
  endOfLine: 'lf',

  plugins: ['prettier-plugin-astro'],

  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
