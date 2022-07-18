import React from 'react';
import iconBookmarkEmpty from '../assets/icon-bookmark-empty.svg';
import iconBookmarkFull from '../assets/icon-bookmark-full.svg';
import iconCategoryMovie from '../assets/icon-category-movie.svg';
import './RecommendedMovie.css';
import posters from '../Posters';

export default function RecommendedMovie({ movie }) {

  return (
    <div className="recommended-movie">
      <div style={{backgroundImage: `url(${posters.regular.small.get(movie.title)}`}} className="recommended-movie-poster">
        <div className="bookmark-icon">
          <img src={movie.isBookmarked ? iconBookmarkFull : iconBookmarkEmpty} alt="empty bookmark" />
        </div>
      </div>
      <ul className="recommended-movie-details">
        <li>
          <p>{movie.year}</p>
        </li>
        <li>
          <div className="separator"></div>
        </li>
        <li>
          <img src={iconCategoryMovie} alt="movie" />
          <p>{movie.category}</p>
        </li>
        <li>
          <div className="separator"></div>
        </li>
        <li>
          <p>{movie.rating}</p>
        </li>
      </ul>
      <h3 className="recommended-movie-title">{movie.title}</h3>
    </div>
  );
}
