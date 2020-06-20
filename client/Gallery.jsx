import React from 'react';
import { Link } from 'react-router-dom';

import students from '../docs/database/students.js';

function Gallery() {
  return (
    <section className="gallery">
      {students.map((student) => (
        <div className="gallery-item" key={student.id}>
          <Link to={`/${student.id}`}>
            <div className="gallery-item-thumbnail"></div>
          </Link>
          <div className="gallery-item-text">
            <Link to={`/${student.id}`}>
              <div className="gallery-item-title">TITLE</div>
            </Link>
            <Link to={`/${student.id}`}>
              <h4 className="gallery-item-author"> {student.name} </h4>
            </Link>
            <p className="gallery-item-blurb">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis ad porro ipsa dicta quia assumenda vero vel commodi excepturi mollitia iste harum, perspiciatis, beatae tempora. Ab dolorem perferendis corrupti!</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Gallery;