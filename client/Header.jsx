import React, { useState } from 'react';

function Header() {

  return (
    <header>
      <h1>Teensway <span className="comics-font">Comics!</span></h1>
      <nav>
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Teensway</li>
          <li>Wing Luke Museum</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;