import React, { useState, useEffect } from 'react';

function Carousel() {
  const [imgOrder, setImgOrder] = useState([0, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselImages = ['./assets/Ocean-01.jpg', './assets/Ocean-02.jpg'];

  useEffect(() => {
    // Initialize a random list of students' ids using inside-out Fisher-Yates shuffle
    const ids = []
    for (let i = 0; i < 2; i += 1) {
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
        <img src={carouselImages[currentIndex]} alt="" className="splash-img" />
        <div className="splash-arrows">
          <a onClick={handleLeftArrowClick} className="splash-left"><i className="fas fa-chevron-left"></i></a>
          <a onClick={handleRightArrowClick} className="splash-right"><i className="fas fa-chevron-right"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
