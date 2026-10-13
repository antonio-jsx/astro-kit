import { Hono } from 'hono';
import { cors } from 'hono/cors';

import { auth } from '@/lib/auth';
import { env } from '@/lib/env/server';

const app = new Hono();

app.use(
  '/*',
  cors({
    origin: env.CORS_ORIGIN,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
);

app.on(['POST', 'GET'], '/api/auth/*', (c) => auth.handler(c.req.raw));

export default app;
