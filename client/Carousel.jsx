import React from 'react';

import students from '../public/database/students.js';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12, 13, 14, 15],
      currentIndex: 0,
    }

    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
  }

  componentDidMount() {
    // Initialize an ordered list of students' ids
    const ids = []
    for (let i = 0; i < students.length; i += 1) {
      ids[i] = i;
    }
    // Randomize them
    for (let i = students.length - 1; i > 0; i -= 1) {
      const temp = ids[i];
      const swapIndex = Math.floor(Math.random() * (i + 1));
      ids[i] = ids[swapIndex];
      ids[swapIndex] = temp;
    }
    this.setState({
      imgOrder: ids,
    })
  }

  handleLeftArrowClick() {
    const { currentIndex, imgOrder } = this.state;
    if (currentIndex > 0) {
      this.setState({
        currentIndex: currentIndex -1,
      })
    } else {
      this.setState({
        currentIndex: imgOrder.length - 1,
      })
    }
  }

  handleRightArrowClick() {
    const { currentIndex, imgOrder } = this.state;
    if (currentIndex < imgOrder.length - 1) {
      this.setState({
        currentIndex: currentIndex + 1,
      })
    } else {
      this.setState({
        currentIndex: 0,
      })
    }
  }

  render() {
    const { imgOrder, currentIndex } = this.state;
    const { handleComicClick } = this.props;
    return (
      <section>
        <div className="splash">
          <div className="img-0"></div>
          <div className="splash-text">
            <a onClick={() => handleComicClick(imgOrder[currentIndex])} className="splash-author">{ students[imgOrder[currentIndex]].name }</a>
            <a onClick={() => handleComicClick(imgOrder[currentIndex])} className="splash-title">{ students[imgOrder[currentIndex]].workTitle.toUpperCase() }</a>
          </div>
          <div className="splash-arrows">
            <a onClick={this.handleLeftArrowClick} className="splash-left">&#10094;</a>
            <a onClick={this.handleRightArrowClick} className="splash-right">&#10095;</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Carousel;
