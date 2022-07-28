import RecommendedMovie from '../RecommendedMovie';
import './ShowsSection.css';

export default function ShowsSection({ section, heading, data }) {
  return (
    <section id={section} className="shows">
      <h2 className="shows-heading">{heading}</h2>
      <div className="shows-grid">
        {data.map((show) => (
          <RecommendedMovie key={show.title} movie={show} />
        ))}
      </div>
    </section>
  );
}
