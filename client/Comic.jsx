import React from 'react';

import students from '../public/database/students.js';

class Comic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 0
    }

    this.handleZeroClick = this.handleZeroClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRandomClick = this.handleRandomClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleMaxClick = this.handleMaxClick.bind(this);
  }

  handleZeroClick() {
    this.setState({
      currentPage: 0,
    })
  }

  handleLeftArrowClick() {
    const { currentPage } = this.state;
    if (currentPage > 0) {
      this.setState({
        currentPage: currentPage - 1,
      })
    }
  }

  handleRandomClick() {
    const { student } = this.props;
    this.setState({
      currentPage: Math.floor(Math.random() * students[student].comicPages.length),
    })
  }

  handleRightArrowClick() {
    const { currentPage } = this.state;
    const { student } = this.props;
    if (currentPage < students[student].comicPages.length - 1) {
      this.setState({
        currentPage: currentPage + 1,
      })
    }
  }

  handleMaxClick() {
    const { currentPage } = this.state;
    const { student } = this.props;
    this.setState({
      currentPage: students[student].comicPages.length - 1,
    })
  }

  render() {
    const { student } = this.props;
    const { currentPage } = this.state;
    return (
      <section>
        <div className="comic-section">
          <div className="comic-arrow-bar">
            <span onClick={this.handleZeroClick} className="comic-max-arrow">&#8676;</span>
            <span onClick={this.handleLeftArrowClick} className="comic-arrow">&#129104;</span>
            <span onClick={this.handleRandomClick} className="comic-random">RANDOM</span>
            <span onClick={this.handleRightArrowClick} className="comic-arrow">&#129106;</span>
            <span onClick={this.handleMaxClick} className="comic-max-arrow">&#8677;</span>
          </div>
          <div className="comic"></div>
          <div className="comic-dot-bar">
            {students[student].comicPages.map((page, index) => index === currentPage ? <span className="comic-dot-red">•</span> : <span className="comic-dot-gray">•</span>)}
          </div>
        </div>

      </section>
    );
  }
}

export default Comic;