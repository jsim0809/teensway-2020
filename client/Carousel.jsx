import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImg: 0
    }
  }

  render() {
    return (
      <section>
        <div className="splash">
          <div className="img-0"></div>
          <div className="splash-text">
            <a className="splash-author">Jeremy Wei Sim</a>
            <a className="splash-title">ALL EAT CANDY</a>
          </div>
          <div className="splash-arrows">
            <a className="splash-left">&#10094;</a>
            <a className="splash-right">&#10095;</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Carousel;
