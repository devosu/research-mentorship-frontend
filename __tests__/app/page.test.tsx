// ./__tests__/app/page.test.tsx
//
// Snapshot test for the Homepage.

// Testing essential imports.
import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';

// Local imports.
import HomePage from '@app/page';

// Test suite.
describe('The homepage', () => {
  it('matches the snapshot', () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
