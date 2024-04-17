// ./src/app/components/eventCard.test.js
//
// Test case for EventCard component.

import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import React from 'react';

import EventCard from './eventCard';

describe('EventCard component', () => {
  it('renders the component', () => {
    render(<EventCard />);
    expect(screen.getByText('@ Time')).toBeInTheDocument();
  });
});
