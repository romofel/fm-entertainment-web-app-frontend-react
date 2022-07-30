import { render, screen } from '@testing-library/react';
import LoginPage from './';

it('should render component without error', () => {
  render(<LoginPage />);

  const loginPage = screen.queryByTestId('login-page');
  expect(loginPage).toBeInTheDocument();
});
it.todo('should accept email input');
it.todo('should accept password input');
it.todo('should disable login button by default');
it.todo('should enable login button when email and password have been entered');
it.todo('should redirect when Sign up is clicked');
it.todo('should redirect on successful login');
it.todo('should not redirect on failed login');
