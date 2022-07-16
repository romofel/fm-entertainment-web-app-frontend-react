import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';
import TrendingMovie from './TrendingMovie';
import './TrendingSection.css';

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
  return <div style={{backgroundColor: 'black'}}>
    <Nav />
    <SearchBar />
    <TrendingSection />
    <RecommendedSection />
    </div>;
}
