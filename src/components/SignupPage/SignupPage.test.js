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

  it('should be disabled when email missing', () => {
    render(<SignupPage />, { wrapper: BrowserRouter });
    const signupButton = screen.queryByTestId('signup-button');
    const passwordInput = screen.queryByTestId('signup-password-input');
    const repasswordInput = screen.queryByTestId('signup-repassword-input');

    expect(passwordInput).toBeInTheDocument();
    expect(repasswordInput).toBeInTheDocument();
    expect(signupButton).toBeInTheDocument();

    userEvent.type(passwordInput, 'password');
    userEvent.type(repasswordInput, 'password');

    expect(signupButton).toBeDisabled();
  });

  it('should be disabled when password missing', () => {
    render(<SignupPage />, { wrapper: BrowserRouter });
    const signupButton = screen.queryByTestId('signup-button');
    const emailInput = screen.queryByTestId('signup-email-input');
    const repasswordInput = screen.queryByTestId('signup-repassword-input');

    expect(signupButton).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(repasswordInput).toBeInTheDocument();

    userEvent.type(emailInput, 'password');
    userEvent.type(repasswordInput, 'password');

    expect(signupButton).toBeDisabled();
  });

  it('should be disabled when repassword is missing', () => {
    render(<SignupPage />, { wrapper: BrowserRouter });
    const signupButton = screen.queryByTestId('signup-button');
    const emailInput = screen.queryByTestId('signup-email-input');
    const passwordInput = screen.queryByTestId('signup-password-input');

    expect(signupButton).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    userEvent.type(emailInput, 'password');
    userEvent.type(passwordInput, 'password');

    expect(signupButton).toBeDisabled();
  });

  it('should be disabled when passwords do not match', () => {
    const userDetails = {
      email: 'user@email.com',
      password: 'password',
      repassword: 'repassword',
    };
    render(<SignupPage />, { wrapper: BrowserRouter });
    const signupButton = screen.queryByTestId('signup-button');
    const emailInput = screen.queryByTestId('signup-email-input');
    const passwordInput = screen.queryByTestId('signup-password-input');
    const repasswordInput = screen.queryByTestId('signup-repassword-input');

    expect(signupButton).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(repasswordInput).toBeInTheDocument();

    userEvent.type(emailInput, userDetails.email);
    userEvent.type(passwordInput, userDetails.password);
    userEvent.type(repasswordInput, userDetails.repassword);

    expect(signupButton).toBeDisabled();
  });
});

it('should call signup api', () => {
  const userDetails = {
    email: 'user@email.com',
    password: 'password',
    repassword: 'password',
  };
  jest.spyOn(registerService, 'registerUser').mockResolvedValue({
    registration: 'SUCCESS',
    message: '',
  });
  render(<SignupPage />, { wrapper: BrowserRouter });
  const signupButton = screen.queryByTestId('signup-button');
  const emailInput = screen.queryByTestId('signup-email-input');
  const passwordInput = screen.queryByTestId('signup-password-input');
  const repasswordInput = screen.queryByTestId('signup-repassword-input');

  expect(signupButton).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(repasswordInput).toBeInTheDocument();

  userEvent.type(emailInput, userDetails.email);
  userEvent.type(passwordInput, userDetails.password);
  userEvent.type(repasswordInput, userDetails.repassword);

  expect(signupButton).toBeEnabled();

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

it('should enable register button if all fields are filled out and both passwords match', () => {
  const userDetails = {
    email: 'user@email.com',
    password: 'password',
  };
  render(<SignupPage />, { wrapper: BrowserRouter });
  const signupButton = screen.queryByTestId('signup-button');
  const emailInput = screen.queryByTestId('signup-email-input');
  const passwordInput = screen.queryByTestId('signup-password-input');
  const repasswordInput = screen.queryByTestId('signup-repassword-input');

  expect(signupButton).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(repasswordInput).toBeInTheDocument();

  userEvent.type(emailInput, userDetails.email);
  userEvent.type(passwordInput, userDetails.password);
  userEvent.type(repasswordInput, userDetails.password);

  expect(signupButton).toBeEnabled();
});

it('should call api with user details', () => {
  const userDetails = {
    email: 'user@email.com',
    password: 'password',
  };

  jest.spyOn(registerService, 'registerUser').mockResolvedValue({
    registration: 'SUCCESS',
    message: '',
  });
  render(<SignupPage />, { wrapper: BrowserRouter });
  const signupButton = screen.queryByTestId('signup-button');
  const emailInput = screen.queryByTestId('signup-email-input');
  const passwordInput = screen.queryByTestId('signup-password-input');
  const repasswordInput = screen.queryByTestId('signup-repassword-input');

  expect(signupButton).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(repasswordInput).toBeInTheDocument();

  userEvent.type(emailInput, userDetails.email);
  userEvent.type(passwordInput, userDetails.password);
  userEvent.type(repasswordInput, userDetails.password);

  userEvent.click(signupButton);

  expect(registerService.registerUser).toBeCalledWith(userDetails);
});

it.todo('should handle a successful signup');
it.todo('should handle a unsucsseful signup');
