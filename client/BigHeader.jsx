import React from 'react';

function BigHeader({ handleHomeClick, handleAboutClick, handleContactClick }) {

  return (
    <header className="big-header">
      <h1 onClick={handleHomeClick} className="teensway-font">TEENSWAY</h1>
      <h1 onClick={handleHomeClick} className="comics-font">Comics!</h1>
      <nav>
        <ul>
          <li onClick={handleAboutClick}>ABOUT</li>
          <li onClick={handleContactClick}>CONTACT</li>
          <li><a href="https://www.wingluke.org/single-exhibit/?mep_event=3866" target="_blank">TEENSWAY <i className="fas fa-external-link-alt"></i></a></li>
          <li><a href="https://www.wingluke.org/" target="_blank">WING LUKE MUSEUM <i className="fas fa-external-link-alt"></i></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default BigHeader;
