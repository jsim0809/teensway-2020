import React, { useState } from 'react';
import students from '../public/database/students.js';

function Gallery() {

  return (
    <section className="gallery">
      {students.map((student) => (
        <div className="gallery-item">
          <div className="gallery-item-thumbnail"></div>
          <div className="gallery-item-text">
            <a className="gallery-item-title">TITLE</a>
            <h4 className="gallery-item-author"> { student.name } </h4>
            <p className="gallery-item-blurb">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis ad porro ipsa dicta quia assumenda vero vel commodi excepturi mollitia iste harum, perspiciatis, beatae tempora. Ab dolorem perferendis corrupti!</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Gallery;