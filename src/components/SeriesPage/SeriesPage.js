import data from '../../data';
import ShowsSection from '../ShowsSection';

export default function SeriesPage() {
  return (
    <ShowsSection
      section="series"
      heading="TV Series"
      data={data.filter((movie) => movie.category === 'TV Series')}
    />
  );
}
