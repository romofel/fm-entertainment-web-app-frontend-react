import React from 'react';
import iconBookmarkEmpty from '../assets/icon-bookmark-empty.svg';
import iconBookmarkFull from '../assets/icon-bookmark-full.svg';
import iconCategoryMovie from '../assets/icon-category-movie.svg';
import './TrendingMovie.css';

export default function TrendingMovie({ movie }) {
  const [isBookmarked, setIsBookmarked] = React.useState(movie.isBookmarked);

  return (
    <div className="trending-movie">
      <div
        className="bookmark-icon"
        onClick={() => setIsBookmarked(!isBookmarked)}
      >
        <img
          src={isBookmarked ? iconBookmarkFull : iconBookmarkEmpty}
          alt="empty bookmark"
        />
      </div>

      <div className="trending-movie-details-section">
        <ul className="trending-movie-details-section-top">
          <li>
            <p>{movie.year}</p>
          </li>
          <li>
            <div className="separator"></div>
          </li>
          <li>
            <img src={iconCategoryMovie} alt="movie icon" />
            <p>{movie.category}</p>
          </li>
          <li>
            <div className="separator"></div>
          </li>
          <li>
            <p>{movie.rating}</p>
          </li>
        </ul>

        <h3 className="trending-movie-title">{movie.title}</h3>
      </div>
    </div>
  );
}
