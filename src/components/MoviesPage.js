import data from '../data';
import RecommendedMovie from './RecommendedMovie';

export default function MoviesPage() {
  return (
    <section id="recommended">
      <h2 className="trending-heading">Movies</h2>

      <div className="recommended-grid">
        {data
          .filter((movie) => movie.category === 'Movie')
          .map((movie) => (
            <RecommendedMovie key={movie.title} movie={movie} />
          ))}
      </div>
    </section>
  );
}
