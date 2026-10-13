import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';
import { env } from '@/lib/env/server';

export default defineConfig({
  out: './src/lib/database/migrations',
  schema: './src/lib/database/schemas/*',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  verbose: true,
  strict: true,
});
