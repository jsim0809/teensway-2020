import React from 'react';

import students from '../public/database/students.js';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14, 15],
      currentIndex: 0,
    }
  }

  componentDidMount() {
    // Initialize an ordered list of students' ids
    const ids = []
    for (let i = 0; i < students.length; i += 1) {
      ids.push(i);
    }
    // Randomize them
    const randomIds = [];
    while (ids.length) {
      randomIds.push(ids[Math.floor(Math.random() * ids.length)]);
    }
    this.setState({
      imgOrder: randomIds,
    })
  }

  render() {
    const { imgOrder, currentIndex } = this.state;
    return (
      <section>
        <div className="splash">
          <div className="img-0"></div>
          <div className="splash-text">
            <a className="splash-author">{ students[imgOrder[currentIndex]].name }</a>
            <a className="splash-title">{ students[imgOrder[currentIndex]].workTitle.toUpperCase() }</a>
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
