import React, { useState } from 'react';

function Carousel() {
  const [image, setImage] = useState(0);

  switch (image) {
    case 0:
      return (
        <section>
          <div className="splash">
            <div className="img-0"></div>
            <div className="splash-text">
              <a className="splash-author">Author</a>
              <a className="splash-title">TITLE</a>
            </div>
            <a className="splash-left">&#10094;</a>
            <a className="splash-right">&#10095;</a>
          </div>
        </section>
      );
    case 1:
      return (
        <section>
          <div className="splash">
            <div className="img-1"></div>
            <div className="splash-text">
              <a className="splash-author">Author</a>
              <a className="splash-title">TITLE</a>
            </div>
            <a className="splash-left">&#10094;</a>
            <a className="splash-right">&#10095;</a>
          </div>
        </section>
      );
    case 2:
      return (
        <section>
          <div className="splash">
            <div className="img-2"></div>
            <div className="splash-text">
              <a className="splash-author">Author</a>
              <a className="splash-title">TITLE</a>
            </div>
            <a className="splash-left">&#10094;</a>
            <a className="splash-right">&#10095;</a>
          </div>
        </section>
      );
  }
}

export default Carousel;