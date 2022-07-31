import Button from './';

export default {
  title: 'Button',
  component: Button,
};

export const Idle = () => <Button>Idle</Button>;

export const Hover = () => <Button>Hover</Button>;
Hover.parameters = {
  pseudo: { hover: true },
};
