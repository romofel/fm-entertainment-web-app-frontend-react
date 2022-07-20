import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.svg';
import home from '../assets/icon-nav-home.svg';
import movies from '../assets/icon-nav-movies.svg';
import series from '../assets/icon-nav-tv-series.svg';
import bookmark from '../assets/icon-nav-bookmark.svg';
import avatar from '../assets/image-avatar.png';
import './Nav.css';

export default function Nav({ active }) {
  return (
    <nav>
      <img src={logo} alt="logo" />

      <ul className="mid-nav">
        <li>
          <NavLink to="/">
            <img
              className={active === 'home' ? 'active' : undefined}
              src={home}
              alt="home nav"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="movies">
            <img
              className={active === 'movies' ? 'active' : undefined}
              src={movies}
              alt="movies nav"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="series">
            <img
              className={active === 'series' ? 'active' : undefined}
              src={series}
              alt="series nav"
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="bookmarks">
            <img
              className={active === 'bookmarks' ? 'active' : undefined}
              src={bookmark}
              alt="bookmarks nav"
            />
          </NavLink>
        </li>
      </ul>

      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </nav>
  );
}
