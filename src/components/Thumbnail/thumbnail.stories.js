import Thumbnail from './';
import trending from '../../assets/thumbnails/1998/trending/large.jpg';

export default {
  title: 'Thumbnail',
  component: Thumbnail,
};

export const Empty = () => <Thumbnail />;
export const Idle = () => <Thumbnail background={trending} />;