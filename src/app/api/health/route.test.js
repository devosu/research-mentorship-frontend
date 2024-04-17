// ./src/app/api/health.test.js
//
// TDD on the health API endpoint.

// Jest server test runs on Node.js env.
// Must use CommonJS module syntax.
const axios = require('axios').default;

describe('Health check api endpoint', () => {
  it(
    ('returns 200 OK for GET requests to "/api/health" ',
      'when server is running and healthy.'),
    async () => {
      // Send a GET request to the /api/health endpoint.
      axios
        .get('http://localhost:3000/api/health')
        .then((response) => {
          expect(response.status).toBe(200);
          expect(response.data).toBe('OK');
        })
        .catch((error) => {
          console.error(error);
        });
    }
  );
});

