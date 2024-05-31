// Unit tests for DefaultHeader component.

// Testing essential imports.
import { describe, expect, it } from '@jest/globals';
import { render } from '@testing-library/react';

// Local imports.
import DefaultHeader from '@src/components/DefaultHeader';

// Behavior for the DefaultHeader component.
describe('The default header component', () => {
	it('renders a header element', () => {
		const { container } = render(<DefaultHeader />);
		expect(container.querySelector('header')).toBeDefined();
	});

  it('matches the snapshot', () => {
    const { container } = render(<DefaultHeader />);
    expect(container).toMatchSnapshot();
  });
});