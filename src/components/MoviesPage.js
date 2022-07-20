import data from '../data';
import ShowsSection from './ShowsSection';

export default function MoviesPage() {
  return (
    <ShowsSection
      section="movies"
      heading="Movies"
      data={data.filter((movie) => movie.category === 'Movie')}
    />
  );
}
