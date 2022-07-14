import React from 'react';
import logo from '../assets/logo.svg';
import home from '../assets/icon-nav-home.svg';
import movies from '../assets/icon-nav-movies.svg';
import series from '../assets/icon-nav-tv-series.svg';
import bookmark from '../assets/icon-nav-bookmark.svg';
import avatar from '../assets/image-avatar.png';
import './Nav.css';

export default function Nav () {
  return (
    <nav>
      <img src={logo} alt="logo" />

      <ul className="mid-nav">
        <li><a href="#"><img src={home} alt="home nav" /></a></li>
        <li><a href="#"><img src={movies} alt="movies nav" /></a></li>
        <li><a href="#"><img src={series} alt="series nav" /></a></li>
        <li><a href="#"><img src={bookmark} alt="bookmarks nav" /></a></li>
      </ul>

      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
    </nav>
  );
}