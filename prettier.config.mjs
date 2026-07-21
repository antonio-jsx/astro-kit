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

  tailwindStylesheet: './src/styles/global.css',

  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],

  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};
