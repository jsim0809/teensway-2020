import React from 'react';
import { Link } from 'react-router-dom';

function BigHeader() {

  return (
    <header className="big-header">
      <h1 className="teensway-font">
        <Link to="/">TEENSWAY</Link>
      </h1>
      <h1 className="comics-font">
        <Link to="/">Comics!</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li><a href="https://www.wingluke.org/single-exhibit/?mep_event=3866" target="_blank">TEENSWAY <i className="fas fa-external-link-alt"></i></a></li>
          <li><a href="https://www.wingluke.org/" target="_blank">WING LUKE MUSEUM <i className="fas fa-external-link-alt"></i></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default BigHeader;
