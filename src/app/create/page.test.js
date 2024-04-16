// ./src/create/page.js
//
// TDD for the sample component.

import React from 'react';
import { render, screen } from '@testing-library/react';

import CreateEvent from './page';

describe('CreateEvent component', () => {
  it('renders the component', () => {
    render(<CreateEvent />);
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });
});
