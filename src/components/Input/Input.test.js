import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from './';

it('should render component', () => {
  render(<Input />);
  const inputField = screen.queryByTestId('input-field');

  expect(inputField).toBeInTheDocument();
});

it('should update display based on typing', () => {
  const inputText = 'randomtext';
  render(<Input />);
  const inputField = screen.queryByTestId('input-field');

  expect(inputField).toBeInTheDocument();

  userEvent.type(inputField, inputText);
  expect(inputField).toHaveValue(inputText);
});
