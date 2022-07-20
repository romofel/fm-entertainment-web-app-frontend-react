import React from 'react';
import { Outlet } from 'react-router-dom';
import data from '../data.json';

import Nav from './Nav';
import SearchBar from './SearchBar';
import RecommendedMovie from './RecommendedMovie';

function SearchSection({ search, data }) {
  const matches = data.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="search">
      <h2 className="search-heading">
        Found {matches.length} Results for '{search}'
      </h2>
      <div className="search-grid">
        {matches.map((movie) => (
          <RecommendedMovie movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default function Screen() {
  const [search, setSearch] = React.useState(null);
  return (
    <>
      <Nav active={'home'} />
      <SearchBar onSearch={setSearch} />

      {search ? <SearchSection search={search} data={data} /> : <Outlet />}
    </>
  );
}
