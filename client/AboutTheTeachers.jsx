import React from 'react';

import teachers from '../public/database/teachers.js';

function AboutTheTeachers() {
  return (
    <section className="about-the-teachers">
      {teachers.map((teacher) => (
        <div className="teacher">
          <div className="teacher-avatar"></div>
          <div className="teacher-text">
            <div className="teacher-text-title">{ teacher.title }</div>
            <div className="teacher-text-name">{ teacher.name }</div>
            <div className="teacher-text-bio">{ teacher.bio }</div>
          </div>
        </div>
      ))}

    </section>
  );
}

export default AboutTheTeachers;
