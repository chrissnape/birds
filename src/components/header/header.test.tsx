import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header', () => {
  it('renders component correctly', () => {
    const { container } = render(<Header />);
    expect(container.querySelector('header')).toBeTruthy();
    expect(screen.getByRole('heading', { name: 'Birds' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Home' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'About' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Birds' })).toBeTruthy();
  });
});
