import RecommendedMovie from './RecommendedMovie';
import './ShowsSection.css';

export default function ShowsSection({ section, heading, data }) {
  return (
    <section id={section}>
      <h2 className="shows-heading">{heading}</h2>
      {data.map((show) => (
        <RecommendedMovie key={show.title} movie={show} />
      ))}
    </section>
  );
}
