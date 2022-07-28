import React from 'react';
import TrendingMovie from '../TrendingMovie';
import ShowsSection from '../ShowsSection';
import '../TrendingSection/TrendingSection.css';
import '../RecommendedSection/RecommendedSection.css';
import '../SearchSection/SearchSection.css';
import data from '../../data.json';

function TrendingSection({ trending }) {
  return (
    <section id="trending">
      <h2 className="trending-heading">Trending</h2>

      <div className="trending-row">
        {trending.map((movie) => (
          <TrendingMovie key={movie.title} movie={movie} />
        ))}{' '}
      </div>
    </section>
  );
}

export default function Home() {
  const [trending, setTrending] = React.useState([]);
  const [recommended, setRecommended] = React.useState([]);

  React.useEffect(() => {
    setTrending(data.filter((movie) => movie.isTrending));
    setRecommended(data.filter((movie) => !movie.isTrending));
  }, []);

  return (
    <div data-testid="home-page" style={{ backgroundColor: '#10141e' }}>
      <>
        <TrendingSection trending={trending} />
        <ShowsSection
          section="recommended"
          heading="Recommended for you"
          data={recommended}
        />
      </>
    </div>
  );
}
