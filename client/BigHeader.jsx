import React from 'react';

function BigHeader({ handleHomeClick }) {

  return (
    <header className="big-header">
      <h1 className="teensway-font">TEENSWAY</h1>
      <h1 className="comics-font">Comics!</h1>
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

export default BigHeader;
