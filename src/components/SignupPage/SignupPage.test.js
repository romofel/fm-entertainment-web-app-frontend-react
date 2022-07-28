import { render, screen } from '@testing-library/react';
import SignupPage from './';

it('should render component without error', () => {
  render(<SignupPage />);
  const signupPage = screen.queryByTestId('signup-page');

  expect(signupPage).toBeInTheDocument();
});
it.todo('should be able to redirect to login component');
it.todo('should call signup api');
it.todo('should handle a successful signup');
it.todo('should handle a unsucsseful signup');
