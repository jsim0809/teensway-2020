import React, { useState } from 'react';

import teachers from '../docs/database/teachers.js';

import LightboxModal from './LightboxModal.jsx';

function Ruby() {
  const [currentPage, setCurrentPage] = useState(0);
  const [displayLightbox, setLightbox] = useState(false);
  const currentComicUrl = teachers[1].comicPages[currentPage];
  const currentCaption = teachers[1].captions[currentPage];

  const handleZeroClick = () => {
    setCurrentPage(0);
  }

  const handleLeftArrowClick = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  const handleRandomClick = () => {
    setCurrentPage(Math.floor(Math.random() * teachers[1].comicPages.length));
  }

  const handleRightArrowClick = () => {
    if (currentPage < teachers[1].comicPages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handleMaxClick = () => {
    setCurrentPage(teachers[1].comicPages.length - 1);
  }

  const handleDotClick = (index) => {
    setCurrentPage(index);
  }

  const handleLightboxClick = () => {
    setLightbox(true);
  }

  const handleLightboxExitClick = () => {
    setLightbox(false);
  }

  return (
    <div>
      <section>
        {displayLightbox ? <LightboxModal image={currentComicUrl} handleLightboxExitClick={handleLightboxExitClick} /> : null}
        <div className="comic-section">
          <div className="comic-arrow-bar">
            <span onClick={handleZeroClick} className="comic-max-arrow"><i className="fas fa-angle-double-left"></i></span>
            <span onClick={handleLeftArrowClick} className="comic-arrow"><i className="fas fa-angle-left"></i></span>
            <span onClick={handleRandomClick} className="comic-random">RANDOM</span>
            <span onClick={handleRightArrowClick} className="comic-arrow"><i className="fas fa-angle-right"></i></span>
            <span onClick={handleMaxClick} className="comic-max-arrow"><i className="fas fa-angle-double-right"></i></span>
          </div>
          <img className="comic" src={currentComicUrl} alt="" onClick={handleLightboxClick} />
          {currentCaption ? <div className="comic-caption">{currentCaption}</div> : null}
          <div className="comic-dot-bar">
            {teachers[1].comicPages.map((page, index) => {
              if (index === currentPage) {
                return <span key={index} className="comic-dot-red" onClick={() => {handleDotClick(index)}}><i className="fas fa-circle"></i></span>;
              } else {
                return <span key={index} className="comic-dot-gray" onClick={() => {handleDotClick(index)}}><i className="fas fa-circle"></i></span>;
              }
            })}
          </div>
        </div>
      </section>
      <section className="bio">
        <div className="bio-author">
          <img src={teachers[1].avatar} alt="" className="avatar" />
          <div className="bio-author-text">
            <h3>{teachers[1].name}</h3>
            <p>{teachers[1].bio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ruby;