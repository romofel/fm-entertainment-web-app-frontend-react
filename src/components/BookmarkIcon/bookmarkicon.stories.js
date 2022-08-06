import BookmarkIcon from './';

export default {
  title: 'BookmarkIcon',
  component: BookmarkIcon,
};

export const Idle = () => <BookmarkIcon isChecked={false} />;
export const Active = () => <BookmarkIcon isChecked />;