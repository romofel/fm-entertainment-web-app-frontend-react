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
it.todo('should accept password input');
it.todo('should disable login button by default');
it.todo('should enable login button when email and password have been entered');
it.todo('should redirect when Sign up is clicked');
it.todo('should redirect on successful login');
it.todo('should not redirect on failed login');
