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

it('should render movies route', () => {
  render(<MemoryRouter initialEntries={["/movies"]}>
    <App />
  </MemoryRouter>)
  const moviesPage = screen.queryByTestId("movies-page");

  expect(moviesPage).toBeInTheDocument();
});

it('should render series route', () => {
  render(<MemoryRouter initialEntries={["/series"]}>
    <App />
  </MemoryRouter>);
  const seriesPage = screen.queryByTestId('series-page');

  expect(seriesPage).toBeInTheDocument();
});

it('should render bookmarks route', () => {
  render(<MemoryRouter initialEntries={["/bookmarks"]}>
    <App />
  </MemoryRouter>)
  const bookmarkMovies = screen.queryByTestId('bookmarks-movies-page');
  const bookmarkSeries = screen.queryByTestId('bookmarks-series-page');

  expect(bookmarkMovies).toBeInTheDocument();
  expect(bookmarkSeries).toBeInTheDocument();
});
it.todo('should render error route when route does not match');
