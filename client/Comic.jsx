import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import students from '../docs/database/students.js';

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
    setCurrentPage(students[student].comicPages.length - 1);
  }

  return (
    <section>
      <div className="comic-section">
        <div className="comic-arrow-bar">
          <span onClick={handleZeroClick} className="comic-max-arrow"><i className="fas fa-angle-double-left"></i></span>
          <span onClick={handleLeftArrowClick} className="comic-arrow"><i className="fas fa-angle-left"></i></span>
          <span onClick={handleRandomClick} className="comic-random">RANDOM</span>
          <span onClick={handleRightArrowClick} className="comic-arrow"><i className="fas fa-angle-right"></i></span>
          <span onClick={handleMaxClick} className="comic-max-arrow"><i className="fas fa-angle-double-right"></i></span>
        </div>
        <div style={{
          backgroundImage: `url(${students[student].comicPages[currentPage]})`
        }} className="comic"></div>
        <div className="comic-dot-bar">
          {students[student].comicPages.map((page, index) => {
            if (index === currentPage) {
              return <span key={index} className="comic-dot-red"><i className="fas fa-circle"></i></span>;
            } else {
              return <span key={index} className="comic-dot-gray"><i className="fas fa-circle"></i></span>;
            }
          })}
        </div>
      </div>
    </section>
  );
}

export default Comic;