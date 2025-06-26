import { render, screen } from '@testing-library/react';
import { Footer } from '../';

describe('Footer', () => {
  it('renders component correctly', () => {
    const { container } = render(<Footer />);
    expect(container.querySelector('footer')).toBeTruthy();
    expect(container.querySelector('p')?.textContent).toContain(
      `© ${new Date().getFullYear()} Birds.`,
    );
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeTruthy();
    expect(container.querySelector('a[href="https://instagram.com"]')).toBeTruthy();
    expect(container.querySelector('a[href="https://twitter.com"]')).toBeTruthy();
  });
});
