import React from 'react';
import iconBookmarkEmpty from '../assets/icon-bookmark-empty.svg';
import iconCategoryMovie from '../assets/icon-category-movie.svg';
import './RecommendedMovie.css';

export default function RecommendedMovie() {
  return (
    <div className="recommended-movie">
      <div className="recommended-movie-poster">
        <div className="bookmark-icon">
          <img src={iconBookmarkEmpty} alt="empty bookmark" />
        </div>
      </div>
      <ul className="recommended-movie-details">
        <li>
          <p>2019</p>
        </li>
        <li>
          <div className="separator"></div>
        </li>
        <li>
          <img src={iconCategoryMovie} alt="movie" />
          <p>Movie</p>
        </li>
        <li>
          <div className="separator"></div>
        </li>
        <li>
          <p>E</p>
        </li>
      </ul>
      <h3 className="recommended-movie-title">The Great Lands</h3>
    </div>
  );
}
