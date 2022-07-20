import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';
import TrendingMovie from './TrendingMovie';
import RecommendedMovie from './RecommendedMovie';
import './TrendingSection.css';
import './RecommendedSection.css';
import './SearchSection.css';
import data from '../data.json';
import ShowsSection from './ShowsSection';

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
    <div style={{ backgroundColor: '#10141e' }}>
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
