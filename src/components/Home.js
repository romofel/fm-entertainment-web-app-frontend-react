import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';
import TrendingMovie from './TrendingMovie';
import './TrendingSection.css';

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
      <h2 class="recommended-heading">Recommended for you</h2>
      <div class="recommended-grid">
        <div class="recommended-movie">
          <div class="recommended-movie-poster">
            <div class="bookmark-icon">
              <img
                src="./assets/icon-bookmark-empty.svg"
                alt="empty bookmark"
              />
            </div>
          </div>
          <ul class="recommended-movie-details">
            <li>
              <p>2019</p>
            </li>
            <li>
              <div class="separator"></div>
            </li>
            <li>
              <img src="./assets/icon-category-movie.svg" alt="movie" />
              <p>Movie</p>
            </li>
            <li>
              <div class="separator"></div>
            </li>
            <li>
              <p>E</p>
            </li>
          </ul>
          <h3 class="recommended-movie-title">The Great Lands</h3>
        </div>
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
