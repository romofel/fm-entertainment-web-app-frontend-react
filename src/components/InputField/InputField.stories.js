import InputField from '.';

export default {
  title: 'InputField',
  component: InputField,
};

export const Email = () => <InputField placeholder="Email" type="email" />;

export const Password = () => (
  <InputField placeholder="Password" type="password" />
);

export const Error = () => (
  <InputField placeholder="Error" type="text" validate={(text) => false} errorText="Can't be empty" />
);
