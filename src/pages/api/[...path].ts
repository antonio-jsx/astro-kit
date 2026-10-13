import type { APIRoute } from 'astro';

import app from '@/lib/api';

const handler: APIRoute = ({ request }) => app.fetch(request);

export { handler as ALL };
