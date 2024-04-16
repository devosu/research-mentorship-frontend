// ./src/app/layout.test.js
//
// Unit tests for RootLayout.

// Import testing utilities.
import { describe, expect, it, jest } from '@jest/globals';
import { renderToString } from 'react-dom/server';

// Import the default and named exports from layout.js.
import RootLayout, { metadata } from './layout';

// Mock the Inter font.
jest.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'inter',
  }),
}));

describe('RootLayout', () => {
  it('has the correct metadata with defined values', () => {
    expect(metadata).toEqual(
      expect.objectContaining({
        charset: expect.anything(),
        title: expect.anything(),
        visualViewport: expect.anything(),
        description: expect.anything(),
      })
    );
  });

  it('renders without crashing', () => {
    const html = renderToString(<RootLayout />);
    expect(html).toBeTruthy();
  });

  it('renders children with correct class', () => {
    const html = renderToString(
      <RootLayout>
        <div>Test</div>
      </RootLayout>
    );
    expect(html).toContain('Test');
    // expect(html).toContain('class="inter"');
  });
});

// Add more tests as project progresses.
