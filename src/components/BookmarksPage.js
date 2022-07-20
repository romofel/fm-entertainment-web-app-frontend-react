import ShowsSection from './ShowsSection';
import data from '../data';

export default function BookmarksPage() {
  const bookmarked = data.filter((show) => show.isBookmarked);

  return (
    <>
      <ShowsSection
        section="bookmarks-movies"
        heading="Bookmarked Movies"
        data={bookmarked.filter((show) => show.category === 'Movie')}
      />
      <ShowsSection
        section="bookmarks-series"
        heading="Bookmarked TV Series"
        data={bookmarked.filter((show) => show.category === 'TV Series')}
      />
    </>
  );
}
