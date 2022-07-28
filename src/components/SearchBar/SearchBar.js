import React from 'react';
import { useLocation } from 'react-router-dom';

import iconsearch from '../../assets/icon-search.svg';
import './SearchBar.css';

const decidePlaceholder = (path) => {
  switch (path) {
    case '/movies':
      return 'Search for movies';
    case '/series':
      return 'Search for TV series';
    case '/bookmarks':
      return 'Search for bookmarked shows';
    default:
      return 'Search for movies or TV Series';
  }
};

export default function SearchBar({ onSearch }) {
  const { pathname: path } = useLocation();

  return (
    <div className="search-bar">
      <img src={iconsearch} alt="search icon" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder={decidePlaceholder(path)}
        onChange={(event) => {
          event.preventDefault();
          onSearch(event.target.value);
        }}
      />
    </div>
  );
}
