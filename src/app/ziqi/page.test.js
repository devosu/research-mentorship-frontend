// ./src/app/ziqi/page.test.js
//
// Unit tests for the Ziqi page.

import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';
// React essential imports.
import React from 'react';

// Page imports.
import Ziqi from './page';

describe('Ziqi', () => {
  it('renders without crashing', () => {
    const { container } = render(<Ziqi />);
    expect(container).toBeTruthy();
  });

  it('renders needed elements with correct classnames', () => {
    const { container } = render(<Ziqi />);
    expect(container.querySelector('div.event-block')).toBeInTheDocument();
    expect(
      container.querySelector('div.image-gallary-block')
    ).toBeInTheDocument();
    expect(
      container.querySelector('div.basic-information-block')
    ).toBeInTheDocument();
    expect(
      container.querySelector('div.organization-block')
    ).toBeInTheDocument();
  });
});

// Add more tests as project progresses.
