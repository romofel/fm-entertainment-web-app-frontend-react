import Thumbnail from './';
import trending from '../../assets/thumbnails/1998/trending/large.jpg';

export default {
  title: 'Thumbnail',
  component: Thumbnail,
};

export const Empty = () => <Thumbnail />;
export const Idle = () => <Thumbnail background={trending} />;
export const Hover = () => <Thumbnail background={trending} />;
Hover.parameters = {
  pseudo: { hover: true },
};