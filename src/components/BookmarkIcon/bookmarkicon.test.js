import { render, screen } from '@testing-library/react';
import BookmarkIcon from './';


it('should render propless component without error', () => {
  render(<BookmarkIcon />);

  const bookmarkIcon = screen.queryByTestId('bookmark-icon');
  expect(bookmarkIcon).toBeInTheDocument();
});