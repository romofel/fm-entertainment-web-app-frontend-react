import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import LoginPage from './';
import SignupPage from '../SignupPage';

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

it('should enable login button when email and password have been entered', () => {
  const userDetails = {
    email: 'user@email.com',
    password: 'password',
  };
  render(<LoginPage />);

  const loginButton = screen.queryByTestId('login-button');
  const emailInput = screen.queryByTestId('login-email-input');
  const passwordInput = screen.queryByTestId('login-password-input');

  expect(loginButton).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeDisabled();

  userEvent.type(emailInput, userDetails.email);
  userEvent.type(passwordInput, userDetails.password);

  expect(loginButton).toBeEnabled();
});

it('should redirect when Sign up is clicked', () => {
  render(
    <MemoryRouter initialEntries={["/login"]}>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </MemoryRouter>
  );

  const loginPage = screen.getByTestId('login-page');
  expect(loginPage).toBeInTheDocument();

  const signupButton = screen.getByTestId('signup-redirect');
  userEvent.click(signupButton);

  const signupPage = screen.getByTestId('signup-page');
  expect(signupPage).toBeInTheDocument();
});
it.todo('should redirect on successful login');
it.todo('should not redirect on failed login');
