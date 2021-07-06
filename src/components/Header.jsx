/* eslint-disable import/no-unresolved */
import React from 'react';
import './Header.css';

// 40 : 17
function Header() {
  return (
    <div className="header_main">
      <img src="/images/Logo.svg" alt="Logo_Img" className="header_logo" />
      <div className="header_navmenu">
        <a href="/">
          <img src="/images/home-icon.svg" alt="nav_links" />
          <span>Home</span>
        </a>

        <a href="/">
          <img src="/images/search-icon.svg" alt="nav_links" />
          <span>Search</span>
        </a>

        <a href="/">
          <img src="/images/watchlist-icon.svg" alt="nav_links" />
          <span>Watchlist</span>
        </a>

        <a href="/">
          <img src="/images/original-icon.svg" alt="nav_links" />
          <span>Original</span>
        </a>

        <a href="/">
          <img src="/images/movie-icon.svg" alt="nav_links" />
          <span>Movies</span>
        </a>

        <a href="/">
          <img src="/images/series-icon.svg" alt="nav_links" />
          <span>Series</span>
        </a>

      </div>
      <img src="data:image/png;base64,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" className="header_UserImg" alt="" />
    </div>
  );
}

export default Header;
