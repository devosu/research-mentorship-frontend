// @api/healthcheck/route.ts
//
// The /healthcheck liveness endpoint.

// NextJS essential imports.

// Process incoming GET requests by returning a 200 OK.
export async function GET(): Promise<Response> {
  return new Response("OK", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
