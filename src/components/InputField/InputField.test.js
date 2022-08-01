import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InputField from '.';

it('should render component', () => {
  render(<InputField />);
  const inputField = screen.queryByTestId('input-field');

  expect(inputField).toBeInTheDocument();
});

it('should update display based on typing', () => {
  const inputText = 'randomtext';
  render(<InputField />);
  const inputField = screen.queryByTestId('input-field');

  expect(inputField).toBeInTheDocument();

  userEvent.type(inputField, inputText);
  expect(inputField).toHaveValue(inputText);
});

it('should display error', () => {
  render(<InputField />);
  const inputField = screen.queryByTestId('input-field');

  expect(inputField).toBeInTheDocument();

  userEvent.type(inputField, "");
  expect(inputField).toHaveValue("");

  const errorDisplay = screen.queryByTestId('error-field');
  expect(errorDisplay).toBeInTheDocument()
})