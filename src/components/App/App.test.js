import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from './';

it('should render default route', () => {});

it('should render login route', () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <App />
    </MemoryRouter>
  );
  const loginPage = screen.queryByTestId('login-page');

  expect(loginPage).toBeInTheDocument();
});

it('should render signup route', () => {
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <App />
    </MemoryRouter>
  );
  const signupPage = screen.queryByTestId('signup-page');

  expect(signupPage).toBeInTheDocument();
});

it('should render home route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const homePage = screen.queryByTestId('home-page');

  expect(homePage).toBeInTheDocument();
});
it.todo('should render movies route');
it.todo('should render series route');
it.todo('should render bookmarks route');
it.todo('should render error route when route does not match');
