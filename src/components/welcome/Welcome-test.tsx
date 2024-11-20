import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Welcome } from './Welcome';

describe('Welcome', () => {
  it('renders welcome message', () => {
    render(<Welcome />);
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });

  it('renders navigation cards', () => {
    render(<Welcome />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    expect(screen.getByText('Sign In')).toBeInTheDocument();
  });

  it('has proper accessibility attributes', () => {
    render(<Welcome />);
    const navigationButtons = screen.getAllByRole('button');
    expect(navigationButtons).toHaveLength(3);
    navigationButtons.forEach((button) => {
      expect(button).toHaveAttribute('tabIndex', '0');
    });
  });
});
