import React from 'react';
import { Link } from 'react-router-dom';

import teachers from '../docs/database/teachers.js';

function AboutTheTeachers() {
  const rubyLink = <div><br /><p><b><Link to={`/ruby`}><u>View Ruby's instructional comics here</u></Link></b></p></div>
  return (
    <section className="about-the-teachers">
      {teachers.map((teacher, index) => (
        <div className="teacher" key={teacher.id}>
          <img src={teacher.avatar} alt="" className="avatar"/>
          <div className="teacher-text">
            <h4>{ teacher.title }</h4>
            <h3>{ teacher.name }</h3>
            <p>{ teacher.bio }</p>
            {index === 1 ? rubyLink : null}
          </div>
        </div>
      ))}

    </section>
  );
}

export default AboutTheTeachers;
