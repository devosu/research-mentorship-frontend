// ./src/app/api/health.js
//
// Health check API endpoint for the application.

import { headers } from 'next/headers';

// Process GET request sent to the /api/health endpoint.
export async function GET(_request) {
  const headersList = headers();
  const referer = headersList.get('referer');

  return new Response('OK', {
    status: 200,
    headers: {
      referer: referer,
    },
  });
}
