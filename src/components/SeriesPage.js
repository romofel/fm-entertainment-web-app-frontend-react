import data from '../data';
import RecommendedMovie from './RecommendedMovie';

export default function SeriesPage() {
  return (
    <section id="recommended">
      <h2 className="trending-heading">TV Series</h2>

      <div className="recommended-grid">
        {data
          .filter((movie) => movie.category === 'TV Series')
          .map((movie) => (
            <RecommendedMovie key={movie.title} movie={movie} />
          ))}
      </div>
    </section>
  );
}
