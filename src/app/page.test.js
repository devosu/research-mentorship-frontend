// ./src/app/page.test.js
//
// Unit tests for Homepage.

import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
// React essential imports.
import React from 'react';

// Page imports.
import Homepage from './page';

describe('Homepage', () => {
  it('renders without crashing', () => {
    const { container } = render(<Homepage />);
    expect(container).toBeTruthy();
  });

  it('renders correct text', () => {
    render(<Homepage />);
    expect(
      screen.getByText('Welcome to home page for event feed!')
    ).toBeTruthy();
    expect(screen.getByText("Go to Yakob's Page")).toBeTruthy();
    expect(screen.getByText("Go to Ziqi's Page")).toBeTruthy();
  });

  it('renders correct links', () => {
    render(<Homepage />);
    expect(screen.getByText("Go to Yakob's Page").href).toContain('/yakob');
    expect(screen.getByText("Go to Ziqi's Page").href).toContain('/ziqi');
  });

  it('renders correct input fields', () => {
    render(<Homepage />);
    expect(screen.getByTestId('event-input')).toBeTruthy();
    expect(screen.getByTestId('date-input')).toBeTruthy();
    expect(screen.getByTestId('location-input')).toBeTruthy();
    expect(screen.getByTestId('club-input')).toBeTruthy();
    expect(screen.getByTestId('submit-button')).toBeTruthy();
  });
});

// Add more tests as project progresses.
