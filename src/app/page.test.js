// ./src/app/page.test.js
//
// Unit tests for Homepage.

// React essential imports.
import React from 'react';
import { render, screen } from '@testing-library/react';

// Page imports.
import Homepage from './page';

test('Home renders without crashing', () => {
  const { container } = render(<Homepage />);
  expect(container).toBeTruthy();
});

test('Home renders correct text', () => {
  render(<Homepage />);
  expect(screen.getByText('Welcome to home page for event feed!')).toBeTruthy();
  expect(screen.getByText("Go to Yakob's Page")).toBeTruthy();
  expect(screen.getByText("Go to Ziqi's Page")).toBeTruthy();
});

test('Home renders correct links', () => {
  render(<Homepage />);
  expect(screen.getByText("Go to Yakob's Page").href).toContain('/yakob');
  expect(screen.getByText("Go to Ziqi's Page").href).toContain('/ziqi');
});

// Add more tests as project progresses.
