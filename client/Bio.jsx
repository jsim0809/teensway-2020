import React from 'react';
import { useParams } from 'react-router-dom';

import students from '../docs/database/students.js';

function Bio() {
  const { student } = useParams();
  return (
    <section className="bio">
      <div className="bio-author">
        <img src={students[student].avatar} alt="" className="avatar" />
        <div className="bio-author-text">
          <h3>{ students[student].name }</h3>
          <p>{ students[student].bio }</p>
        </div>
      </div>
    </section>
  );
}

export default Bio;
