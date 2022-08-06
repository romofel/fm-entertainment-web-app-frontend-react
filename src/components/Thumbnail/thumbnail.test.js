import { render, screen } from '@testing-library/react';
import Thumbnail from './';
import trending from '../../assets/thumbnails/1998/trending/large.jpg';

it('should render only the background by default', () => {
  render(<Thumbnail />);
  const thumbnail = screen.queryByTestId('thumbnail-background');

  expect(thumbnail).toBeInTheDocument();
});

it('should render background when one is passed through props', () => {
  render(<Thumbnail background={trending} />);
  const thumbnail = screen.queryByTestId('thumbnail-background');

  expect(thumbnail).toBeInTheDocument();
});