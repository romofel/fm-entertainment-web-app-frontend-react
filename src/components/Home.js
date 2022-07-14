import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';
import iconBookmarkEmpty from '../assets/icon-bookmark-empty.svg';

function TrendingMovie () {
  return (
    <div className="trending-movie">
      <div className="bookmark-icon">
        <img src={iconBookmarkEmpty} alt="empty bookmark" />
      </div>
    </div>
  );
}

function TrendingSection () {
  return (
    <section id="trending">
      <h2 className="trending-heading">Trending</h2>

      <div className="trending-row">
        <TrendingMovie />
      </div>
    </section>
  );
}

function RecommendedSection () {
  return (
    <div>RecommendedSection Component</div>
  );
}

export default function Home() {
  return <div>
    <Nav />
    <SearchBar />
    <TrendingSection />
    <RecommendedSection />
    </div>;
}
