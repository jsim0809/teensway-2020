import React from 'react';

function Gallery({ students, handleComicClick }) {

  return (
    <section className="gallery">
      {students.map((student) => (
        <div className="gallery-item" key={student.id}>
          <div onClick={() => handleComicClick(student.id)} className="gallery-item-thumbnail"></div>
          <div className="gallery-item-text">
            <a onClick={() => handleComicClick(student.id)} className="gallery-item-title">TITLE</a>
            <h4 onClick={() => handleComicClick(student.id)} className="gallery-item-author"> { student.name } </h4>
            <p className="gallery-item-blurb">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis ad porro ipsa dicta quia assumenda vero vel commodi excepturi mollitia iste harum, perspiciatis, beatae tempora. Ab dolorem perferendis corrupti!</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Gallery;