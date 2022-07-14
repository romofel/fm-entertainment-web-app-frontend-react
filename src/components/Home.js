import React from 'react';
import Nav from './Nav';
import SearchBar from './SearchBar';
import iconBookmarkEmpty from '../assets/icon-bookmark-empty.svg';
import iconCategoryMovie from '../assets/icon-category-movie.svg';

function TrendingMovie () {
  return (
    <div className="trending-movie">
      <div className="bookmark-icon">
        <img src={iconBookmarkEmpty} alt="empty bookmark" />
      </div>

      <div className="trending-movie-details-section">
        <ul className="trending-movie-details-section-top">
          <li>
            <p>2019</p>
          </li>
          <li>
            <div class="separator"></div>
          </li>
          <li>
            <img src={iconCategoryMovie} alt="movie icon" />
            <p>Movie</p>
          </li>
          <li>
            <div class="separator"></div>
          </li>
          <li>
            <p>PG</p>
          </li>
        </ul>

        <h3 className="trending-movie-title">Beyond Earth</h3>
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
  return <div style={{backgroundColor: 'black'}}>
    <Nav />
    <SearchBar />
    <TrendingSection />
    <RecommendedSection />
    </div>;
}
