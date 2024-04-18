// ./src/create/page.test.js
//
// Unit test suite for the CreateEvent component.

// Testing essential imports.
import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';

// Next essential imports.
import React from 'react';

// Local imports.
import CreateEvent from './page';

describe('CreateEvent component', () => {
  it('renders without crashing', () => {
    const { container } = render(<CreateEvent />);
    expect(container).toBeTruthy();
  });

  it('renders the form inputs', () => {
    render(<CreateEvent />);
    expect(screen.getByPlaceholderText('Event')).toBeInTheDocument();
    expect(screen.getByTestId('date-input')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Location')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Club Name')).toBeInTheDocument();
  });

  it('renders the submit button', () => {
    render(<CreateEvent />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
