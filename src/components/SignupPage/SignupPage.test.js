import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import SignupPage from './';
import LoginPage from '../LoginPage';
import registerService from '../../services/registerService';

it('should render component without error', () => {
  render(<SignupPage />, { wrapper: BrowserRouter });
  const signupPage = screen.queryByTestId('signup-page');

  expect(signupPage).toBeInTheDocument();
});

it('should be able to redirect to login component', async () => {
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Routes>
    </MemoryRouter>
  );
  const loginButton = screen.getByTestId('login-redirect');

  expect(loginButton).toBeInTheDocument();
  userEvent.click(loginButton);

  const loginPage = await screen.findByTestId('login-page');
  expect(loginPage).toBeInTheDocument();
});

describe('when register button should be disabled', () => {
  it('should disable register button by default', () => {
    render(<SignupPage />, { wrapper: BrowserRouter });
    const signupButton = screen.queryByTestId('signup-button');

    expect(signupButton).toBeInTheDocument();
    expect(signupButton).toBeDisabled();
  });

  it.todo('should be disabled when email missing');
  it.todo('should be disabled when password missing');
  it.todo('should be disabled when repassword is missing');
  it.todo('should be disabled when passwords do not match');
});

it('should call signup api', () => {
  jest.spyOn(registerService, 'registerUser').mockResolvedValue({
    registration: 'SUCCESS',
    message: '',
  });
  render(<SignupPage />, { wrapper: BrowserRouter });
  const signupButton = screen.queryByTestId('signup-button');

  expect(signupButton).toBeInTheDocument();

  userEvent.click(signupButton);

  expect(registerService.registerUser).toHaveBeenCalledTimes(1);
});

it('should accept email input', () => {
  render(<SignupPage />, { wrapper: BrowserRouter });
  const emailInput = screen.queryByTestId('signup-email-input');

  expect(emailInput).toBeInTheDocument();

  userEvent.type(emailInput, 'user@email.com');
  expect(emailInput).toHaveValue('user@email.com');
});

it('should accept password input', () => {
  render(<SignupPage />, { wrapper: BrowserRouter });
  const passwordInput = screen.queryByTestId('signup-password-input');

  expect(passwordInput).toBeInTheDocument();

  userEvent.type(passwordInput, 'password');
  expect(passwordInput).toHaveValue('password');
});

it('should accept password confirmation input', () => {
  render(<SignupPage />, { wrapper: BrowserRouter });
  const passwordInput = screen.queryByTestId('signup-repassword-input');

  expect(passwordInput).toBeInTheDocument();

  userEvent.type(passwordInput, 'password');
  expect(passwordInput).toHaveValue('password');
});

it.todo('should perform check that both passwords match');


it.todo('should handle a successful signup');
it.todo('should handle a unsucsseful signup');
