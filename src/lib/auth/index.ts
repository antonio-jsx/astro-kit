import { i18n, locales } from '@better-auth/i18n';
import { betterAuth } from 'better-auth';
import Database from 'better-sqlite3';
import { env } from '../env/server';

const database = new Database('auth.db');

export const auth = betterAuth({
  database: database,
  advanced: {
    database: {
      joins: true,
    },
  },
  baseURL: {
    allowedHosts: [env.BETTER_AUTH_URL],
    protocol: env.NODE_ENV === 'development' ? 'http' : 'https',
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
