import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';

function TrendingSection () {
  return (
    <div>TrendingSection Component</div>
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
