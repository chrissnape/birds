import { render, screen } from '@testing-library/react';
import Page from './page';

const children = <div>Hello World!</div>;

describe('Page', () => {
  it('renders component correctly', () => {
    render(<Page>{children}</Page>);
    expect(screen.getByText('Hello World!')).toBeTruthy();
  });
});
