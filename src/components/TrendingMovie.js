import React from 'react';
import iconBookmarkEmpty from '../assets/icon-bookmark-empty.svg';
import iconCategoryMovie from '../assets/icon-category-movie.svg';
import './TrendingMovie.css';

export default function TrendingMovie ({ movie }) {
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
            <div className="separator"></div>
          </li>
          <li>
            <img src={iconCategoryMovie} alt="movie icon" />
            <p>Movie</p>
          </li>
          <li>
            <div className="separator"></div>
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