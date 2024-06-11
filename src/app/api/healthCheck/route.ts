// @api/health/route.ts
//
// The /health liveness check api endpoint.

// NextJS essential imports.

// Process incoming GET requests by returning a 200 OK.
export async function GET() {
  return new Response('OK', {
    status: 200,
  });
}
