import { i18n, locales } from '@better-auth/i18n';
import { betterAuth } from 'better-auth';
import Database from 'better-sqlite3';

const database = new Database('auth.db');

export const auth = betterAuth({
  database: database,
  advanced: {
    database: {
      joins: true,
    },
  },
  baseURL: {
    allowedHosts: ['localhost:*'],
    protocol: process.env.NODE_ENV === 'development' ? 'http' : 'https',
  },
  emailAndPassword: { enabled: true },
  session: {
    cookieCache: {
      enabled: true,
      strategy: 'jwe',
    },
  },
  rateLimit: {
    enabled: true,
  },
  plugins: [
    i18n({
      translations: {
        es: locales.es,
      },
      defaultLocale: 'es',
    }),
  ],
});
