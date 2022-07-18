import React from 'react';
import iconsearch from '../assets/icon-search.svg';
import './SearchBar.css';

export default function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <img src={iconsearch} alt="search icon" />
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for movies or TV series"
        onChange={(event) => {
          event.preventDefault();
          onSearch(event.target.value);
        }}
      />
    </div>
  );
}
