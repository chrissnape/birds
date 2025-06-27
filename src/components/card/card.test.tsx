import { render, screen } from '@testing-library/react';
import Card from './card';
import CardProps from './card.types';

const cardProps: CardProps = {
  id: 5,
  name: 'Robin',
  sciName: 'Lorem Ipsum',
  images: [
    'image-1.jpg',
    'image-2.jpg',
    'image-3.jpg',
  ],
}

describe('Card', () => {
  it('renders component correctly', () => {
    render(<Card { ...cardProps } />);
    expect(screen.getByTestId(`card--${cardProps.id}`)).toBeTruthy();
    expect(screen.getByText(cardProps.name)).toBeTruthy();
    expect(screen.getByText(cardProps.sciName)).toBeTruthy();
    expect(screen.getByRole('img')).toHaveAttribute('src', expect.stringMatching(new RegExp(cardProps.images.join("|"), 'gi')));
    expect(screen.queryByText('No image available')).toBeFalsy();
  });

  it('renders component correctly when images array is empty', () => {
    render(<Card { ...cardProps } images={[]} />);
    expect(screen.queryByRole('img')).toBeFalsy();
    expect(screen.getByText('No image available')).toBeTruthy();
  });
});
