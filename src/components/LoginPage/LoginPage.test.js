import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from './';

it('should render component without error', () => {
  render(<LoginPage />);

  const loginPage = screen.queryByTestId('login-page');
  expect(loginPage).toBeInTheDocument();
});

it('should accept email input', () => {
  const userEmail = 'user@email.com';
  render(<LoginPage />);

  const emailInput = screen.queryByTestId('login-email-input');
  expect(emailInput).toBeInTheDocument();

  userEvent.type(emailInput, userEmail);
  expect(emailInput).toHaveValue(userEmail);
});

it('should accept password input', () => {
  const password = 'password';
  render(<LoginPage />);

  const passwordInput = screen.queryByTestId('login-password-input');
  expect(passwordInput).toBeInTheDocument();

  userEvent.type(passwordInput, password);
  expect(passwordInput).toHaveValue(password);
});

it('should disable login button by default', () => {
  render(<LoginPage />);

  const loginButton = screen.queryByTestId('login-button');
  expect(loginButton).toBeInTheDocument();
  expect(loginButton).toBeDisabled();
});
it.todo('should enable login button when email and password have been entered');
it.todo('should redirect when Sign up is clicked');
it.todo('should redirect on successful login');
it.todo('should not redirect on failed login');
