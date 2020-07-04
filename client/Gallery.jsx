import React from 'react';
import { Link } from 'react-router-dom';

import students from '../docs/database/students.js';

function Gallery() {
  return (
    <section className="gallery">
      {students.map((student) => (
        <div className="gallery-item" key={student.id}>
          <Link to={`/${student.id}`}>
            <img src={student.avatar} alt="" className="gallery-item-thumbnail" />
          </Link>
          <div className="gallery-item-text">
            <Link to={`/${student.id}`}>
              <h4 className="gallery-item-author">{student.name}</h4>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Gallery;