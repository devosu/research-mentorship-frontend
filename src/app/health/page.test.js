// Path: ./src/app/health/page.test.js
//
// Test file for the HealthCheckComp component.
import React from 'react';
import HealthCheck from './page';
import { render, screen } from '@testing-library/react';

describe('Health check component', () => {
  it('should render', () => {
    render(<HealthCheck />);
    expect(screen.getByText('App is running and healthy.')).toBeInTheDocument();
  });
});
