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

it('should hide error by default', () => {
  render(<InputField />);
  const inputField = screen.queryByTestId('input-field');

  expect(inputField).toBeInTheDocument();

  const errorField = screen.queryByTestId('error-field');
  expect(errorField).not.toBeInTheDocument();
});

it('should display error when validation fails', () => {
  const validateFunction = (text) => false;
  render(<InputField validate={validateFunction} />);
  const inputField = screen.queryByTestId('input-field');

  expect(inputField).toBeInTheDocument();

  userEvent.type(inputField, 'a');
  expect(inputField).toHaveValue('a');

  const errorField = screen.queryByTestId('error-field');
  expect(errorField).toBeInTheDocument();
});

it('should not display empty error until after user has typed something', () => {
  const validateFunction = (text) => false;
  const typedText = 'S';
  render(<InputField validate={validateFunction} />);
  const inputField = screen.queryByTestId('input-field');
  let errorField = screen.queryByTestId('error-field');
  expect(errorField).not.toBeInTheDocument();

  userEvent.type(inputField, typedText);
  expect(inputField).toHaveValue(typedText);

  userEvent.keyboard('[Backspace]');
  expect(inputField).toHaveValue('');
  errorField = screen.queryByTestId('error-field');
  expect(errorField).toBeInTheDocument();
});
