import React from 'react';

function Header({ handleHomeClick }) {

  return (
    <header className="small-header">
      <h1 onClick={handleHomeClick}><span className="teensway-font">TEENSWAY</span> <span className="comics-font">Comics!</span></h1>
      <nav>
        <ul>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>TEENSWAY</li>
          <li>WING LUKE MUSEUM</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
