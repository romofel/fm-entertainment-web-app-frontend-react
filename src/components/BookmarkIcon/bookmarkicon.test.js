import { render, screen } from '@testing-library/react';
import BookmarkIcon from './';


it('should render propless component without error', () => {
  render(<BookmarkIcon />);

  const bookmarkIcon = screen.queryByTestId('bookmark-icon');
  expect(bookmarkIcon).toBeInTheDocument();
});

it('should render unchecked icon by default', () => {
  render(<BookmarkIcon />);

  const bookmarkIcon = screen.queryByTestId('bookmark-icon');
  expect(bookmarkIcon).toBeInTheDocument();
  const bookmark = screen.queryByTestId('bookmark-unchecked');
  expect(bookmark).toBeInTheDocument();
});

it('should render checked icon when isChecked is true', () => {
  render(<BookmarkIcon isChecked={true} />);

  const bookmarkIcon = screen.queryByTestId('bookmark-icon');
  expect(bookmarkIcon).toBeInTheDocument();
  const bookmark = screen.queryByTestId('bookmark-checked');
  expect(bookmark).toBeInTheDocument();
});

it('should render unchecked icon when isChecked is false', () => {
  render(<BookmarkIcon isChecked={false} />);

  const bookmarkIcon = screen.queryByTestId('bookmark-icon');
  expect(bookmarkIcon).toBeInTheDocument();
  const bookmark = screen.queryByTestId('bookmark-unchecked');
  expect(bookmark).toBeInTheDocument();
});