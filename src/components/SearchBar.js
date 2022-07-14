import React from 'react';
import iconsearch from '../assets/icon-search.svg';

export default function SearchBar () {
  return (
    <div className="search-bar">
      <img src={iconsearch} alt="search icon" />
      <input type="search" name="search" id="search" placeholder="Search for movies or TV series" />
    </div>
  );
}