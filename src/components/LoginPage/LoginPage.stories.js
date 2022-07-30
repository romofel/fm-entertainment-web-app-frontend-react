import LoginPage from './';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'LoginPage',
  component: LoginPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export const Primary = () => <LoginPage />;
