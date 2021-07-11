/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import './Header.css';
import { useHistory, Link } from 'react-router-dom';
import { useAuth, logout } from '../context/authContext';

function Header() {
  const history = useHistory();
  const { currentUser } = useAuth();
  if (!currentUser) history.push('/login');

  console.log(currentUser);
  const [logoutPanel, setLogoutPanel] = useState(false);
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
      <div className="header_UserImg" onClick={() => { setLogoutPanel((val) => !val); }}>

        <span>
          {currentUser && (currentUser.email && (` ${currentUser.email.split('@')[0]}`)) }
        </span>

        {/* Logout Panel */}
        {logoutPanel && currentUser && (

        <div className="logout_panel" onClick={() => { logout(); }}>
          <div className="logout_panel_data">
            Logout
          </div>

        </div>

        )}

        {/* Login Panel */}

        {logoutPanel && !currentUser && (
          <Link className="logout_panel" to="/login">

            <div className="logout_panel_data">
              Login
            </div>
          </Link>
        )}
      </div>

    </div>
  );
}

export default Header;
