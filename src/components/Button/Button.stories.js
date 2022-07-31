import Button from './';

export default {
  title: 'Button',
  component: Button,
};

export const Idle = () => <Button text="Idle" />;

export const Hover = () => <Button text="Hover" />;
Hover.parameters = {
  pseudo: { hover: true },
};

export const Disabled = () => <Button isDisabled text="Disabled" />;
