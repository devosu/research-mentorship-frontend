// ./src/app/health/page.js
//
// Health check page for the app.

import React from 'react';

/**
 * For checking if the app is running.
 *
 * @returns {ReactElement} The React element.
 */
export default function HealthCheck() {
  // Visual message for humans.
  return (
    <div>
      <p>App is running and healthy.</p>
    </div>
  );
}
