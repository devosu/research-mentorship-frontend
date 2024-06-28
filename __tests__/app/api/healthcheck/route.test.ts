/**
 * @jest-environment node
 */

// IMPORTANT!!
// Put this at the top of the test file to avoid the following error:
// `ReferenceError: Request is not defined.`
// This is because we are testing the API routes in a Node.js environment,
// and NOT the browser environment (jsdom).

// ./__tests__/app/api/healthcheck/route.test.ts
//
// Unittests for the /healthcheck liveness endpoint.

// Testing essential imports.
import { describe, expect, it } from "@jest/globals";
import { createRequest } from "node-mocks-http";

// Local imports.
import { GET } from "@api/healthcheck/route";

// Test suite.
describe("GET /api/healthcheck", () => {
  it("returns a 200 OK", async () => {
    // Mock the incoming request.
    const mockNextRequest = createRequest({
      method: "GET",
      url: "/api/healthcheck",
    });

    // Process the request.
    const mockNextResponse = await GET();
    const mockNextResponseStatus = mockNextResponse.status;
    const mockNextResponseText = await mockNextResponse.text();

    // Check the response.
    expect(mockNextResponseStatus).toBe(200);
    expect(mockNextResponseText).toBe("OK");
  });
});
