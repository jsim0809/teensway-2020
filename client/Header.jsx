import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="small-header">
      <div className="small-header-logo">
        <Link to="/">
          <img src="assets/teensway-logo.png" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/submissions">SUBMISSIONS</Link>
          </li>
          <li><a href="https://www.wingluke.org/single-exhibit/?mep_event=3866" target="_blank">TEENSWAY <i className="fas fa-external-link-alt"></i></a></li>
          <li><a href="https://www.wingluke.org/" target="_blank">WING LUKE MUSEUM <i className="fas fa-external-link-alt"></i></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
