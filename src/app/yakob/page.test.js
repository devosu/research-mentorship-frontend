// ./src/app/Yakob/page.test.js
//
// Unit tests for the Yakob page.

// React essential imports.
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Page imports.
import Yakob from './page';

describe('Yakob', () => {
  it('renders without crashing', () => {
    const { container } = render(<Yakob />);
    expect(container).toBeTruthy();
  });

  it('renders correct links', () => {
    render(<Yakob />);
    expect(screen.getByRole('link', { name: /Home/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /Groups/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /Events/i })).toBeTruthy();
  });

  it('renders correct elements', () => {
    render(<Yakob />);
    expect(screen.getByRole('navigation')).toBeTruthy();
    expect(screen.getByRole('img')).toBeTruthy();
    expect(screen.getByRole('searchbox')).toBeTruthy();
  });

  it('renders correct buttons', () => {
    render(<Yakob />);
    const button = screen.getByRole('button', { name: /Sign In/i });
    expect(button).toBeTruthy();
    // Test button click triggering state change.
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /Sign Out/i })).toBeTruthy();
    expect(screen.getByRole('button', { name: /🔍/i })).toBeTruthy();
  });

  it('toggles authentication state', () => {
    // Set up console mock and render component.
    const consoleSpy = jest.spyOn(console, 'log');
    render(<Yakob />);

    // Expect button to be present and init state to be false.
    const button = screen.getByRole('button', { name: /Sign In/i });
    expect(button).toBeTruthy();

    // Test button click triggering state change.
    fireEvent.click(button);
    expect(consoleSpy).toHaveBeenCalledWith('Sign in logic here.');
    expect(screen.getByRole('button', { name: /Sign Out/i })).toBeTruthy();

    fireEvent.click(button);
    expect(consoleSpy).toHaveBeenCalledWith('Sign out logic here.');
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeTruthy();

    consoleSpy.mockRestore();
  });
});

// Add more tests as project progresses.
