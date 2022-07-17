import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';
import TrendingMovie from './TrendingMovie';
import RecommendedMovie from './RecommendedMovie';
import './TrendingSection.css';
import './RecommendedSection.css';
import data from '../data.json';

function TrendingSection() {
  return (
    <section id="trending">
      <h2 className="trending-heading">Trending</h2>

      <div className="trending-row">
        <TrendingMovie />
      </div>
    </section>
  );
}

function RecommendedSection({ recommended }) {
  return (
    <section id="recommended">
      <h2 className="recommended-heading">Recommended for you</h2>
      <div className="recommended-grid">
        {
          recommended.map(movie => <RecommendedMovie movie={movie}/>)
        }
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
    <div style={{ backgroundColor: 'black' }}>
      <Nav />
      <SearchBar />
      <TrendingSection />
      <RecommendedSection recommended={recommended} />
    </div>
  );
}
