import Input from './';

export default {
  title: 'Input',
  component: Input,
};

export const Email = () => <Input placeholder="Email" type="email"/>;

export const Password = () => <Input placeholder="Password" type="password" />;