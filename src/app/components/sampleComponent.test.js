// ./src/app/compoents/sampleComponent.test.js
//
// TDD for the sample component.

import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import React from 'react';

import SampleComponent from './sampleComponent';

describe('Sample component', () => {
  it('renders the component', () => {
    render(<SampleComponent />);
    expect(screen.getByText('Sample Component')).toBeInTheDocument();
  });
});
