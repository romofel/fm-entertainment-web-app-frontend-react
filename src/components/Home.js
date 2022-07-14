import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';

function TrendingSection () {
  return (
    <section id="trending">TrendingSection Component</section>
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
