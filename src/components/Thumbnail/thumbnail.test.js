import { render, screen } from '@testing-library/react';
import Thumbnail from './';

it('should render only the background by default', () => {
  render(<Thumbnail />);
  const thumbnail = screen.queryByTestId('thumbnail-background');

  expect(thumbnail).toBeInTheDocument();
});