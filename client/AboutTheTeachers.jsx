import React from 'react';

import teachers from '../docs/database/teachers.js';

function AboutTheTeachers() {
  return (
    <section className="about-the-teachers">
      {teachers.map((teacher) => (
        <div className="teacher" key={teacher.id}>
          <div className="avatar"></div>
          <div className="teacher-text">
            <h4>{ teacher.title }</h4>
            <h3>{ teacher.name }</h3>
            <p>{ teacher.bio }</p>
          </div>
        </div>
      ))}

    </section>
  );
}

export default AboutTheTeachers;
