import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import students from '../docs/database/students.js';

function Carousel() {
  const [imgOrder, setImgOrder] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initialize a random list of students' ids using inside-out Fisher-Yates shuffle
    const ids = []
    for (let i = 0; i < students.length; i += 1) {
      const swapIndex = Math.floor(Math.random() * (i + 1));
      ids[i] = ids[swapIndex];
      ids[swapIndex] = i;
    }
    setImgOrder(ids);
  }, []);

  const handleLeftArrowClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(imgOrder.length - 1);
    }
  }

  const handleRightArrowClick = () => {
    if (currentIndex < imgOrder.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }

  return (
    <section>
      <div className="splash">
        <div className="img-0"></div>
        <div className="splash-text">
          <Link to={`/${imgOrder[currentIndex]}`}>
            <div className="splash-author">{students[imgOrder[currentIndex]].name}</div>
          </Link>
          <Link to={`/${imgOrder[currentIndex]}`}>
            <div className="splash-title">{students[imgOrder[currentIndex]].workTitle.toUpperCase()}</div>
          </Link>
        </div>
        <div className="splash-arrows">
          <a onClick={handleLeftArrowClick} className="splash-left"><i className="fas fa-chevron-left"></i></a>
          <a onClick={handleRightArrowClick} className="splash-right"><i className="fas fa-chevron-right"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
