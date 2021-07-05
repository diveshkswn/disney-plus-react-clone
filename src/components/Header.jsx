/* eslint-disable import/no-unresolved */
import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header_main">
      <img src="/images/Logo.svg" alt="Logo_Img" className="header_logo" />
      <div className="header_navmenu">
        <a href="/">
          <img src="/images/home-icon.svg" alt="nav_links" />
          <span>Home</span>
        </a>
      </div>
    </div>
  );
}

export default Header;
