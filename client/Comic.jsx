import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import students from '../public/database/students.js';

function Comic() {
  const [currentPage, setCurrentPage] = useState(0);
  const { student } = useParams();

  const handleZeroClick = () => {
    setCurrentPage(0);
  }

  const handleLeftArrowClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleRandomClick = () => {
    setCurrentPage(Math.floor(Math.random() * students[student].comicPages.length));
  }

  const handleRightArrowClick = () => {
    if (currentPage < students[student].comicPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleMaxClick = () => {
    this.setState({
      currentPage: students[student].comicPages.length - 1,
    })
  }

  return (
    <section>
      <div className="comic-section">
        <div className="comic-arrow-bar">
          <span onClick={handleZeroClick} className="comic-max-arrow">&#8676;</span>
          <span onClick={handleLeftArrowClick} className="comic-arrow">&#129104;</span>
          <span onClick={handleRandomClick} className="comic-random">RANDOM</span>
          <span onClick={handleRightArrowClick} className="comic-arrow">&#129106;</span>
          <span onClick={handleMaxClick} className="comic-max-arrow">&#8677;</span>
        </div>
        <div className="comic"></div>
        <div className="comic-dot-bar">
          {students[student].comicPages.map((page, index) => index === currentPage ? <span key={index} className="comic-dot-red">•</span> : <span key={index} className="comic-dot-gray">•</span>)}
        </div>
      </div>

    </section>
  );
}

export default Comic;