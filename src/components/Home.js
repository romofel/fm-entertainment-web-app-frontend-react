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

function RecommendedSection() {
  return (
    <section id="recommended">
      <h2 className="recommended-heading">Recommended for you</h2>
      <div className="recommended-grid">
        <RecommendedMovie />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div style={{ backgroundColor: 'black' }}>
      <Nav />
      <SearchBar />
      <TrendingSection />
      <RecommendedSection />
    </div>
  );
}
