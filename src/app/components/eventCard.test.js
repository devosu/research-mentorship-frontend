// ./src/app/components/eventCard.test.js
//
// Test case for EventCard component.

import React from 'react';
import { render, screen } from '@testing-library/react';

import EventCard from './eventCard';

describe('EventCard component', () => {
  it('renders the component', () => {
    render(<EventCard />);
    expect(screen.getByText('@ Time')).toBeInTheDocument();
  });
});
