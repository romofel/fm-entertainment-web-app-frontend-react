import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './';

it('should render default route', () => {
  render(<App />, { wrapper: BrowserRouter });
  screen.debug();
});

it.todo('should render login route');
it.todo('should render signup route');
it.todo('should render home route');
it.todo('should render movies route');
it.todo('should render series route');
it.todo('should render bookmarks route');
it.todo('should render error route when route does not match');
