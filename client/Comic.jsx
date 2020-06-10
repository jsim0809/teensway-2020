import React from 'react';

function Comic({ student }) {
  return (
    <section>
      <div className="comic-section">
        <div className="comic-arrow-bar">
          <span className="comic-max-arrow">&#8676;</span>
          <span className="comic-arrow">&#129104;</span>
          <span className="comic-random">RANDOM</span>
          <span className="comic-arrow">&#129106;</span>
          <span className="comic-max-arrow">&#8677;</span>
        </div>
        <div className="comic"></div>
        <div className="comic-dot-bar">
          &#8226;
          &#8226;
          &#8226;
        </div>
      </div>

    </section>
  );
}

export default Comic;