import InputField from '.';

export default {
  title: 'InputField',
  component: InputField,
};

export const Email = () => (
  <InputField
    placeholder="Email"
    type="email"
    validate={(text) => text.length !== 0}
    errorText="Can't be empty"
  />
);

export const Password = () => (
  <InputField
    placeholder="Password"
    type="password"
    validate={(text) => text.length !== 0}
    errorText="Can't be empty"
  />
);

export const Error = () => (
  <InputField
    placeholder="Error"
    type="text"
    validate={(text) => false}
    errorText="Can't be empty"
  />
);
