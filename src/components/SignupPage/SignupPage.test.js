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

it('should call signup api', () => {
  jest.spyOn(registerService, 'registerUser').mockResolvedValue({
    registration: "SUCCESS",
    message: "",
  });
  render(<SignupPage />, { wrapper: BrowserRouter });
  const signupButton = screen.queryByTestId('signup-button');
  
  expect(signupButton).toBeInTheDocument();

  userEvent.click(signupButton);

  expect(registerService.registerUser).toHaveBeenCalledTimes(1);
});

it.todo('should handle a successful signup');
it.todo('should handle a unsucsseful signup');
