import React from 'react';
import { useParams } from 'react-router-dom';

import students from '../docs/database/students.js';

function Bio() {
  const { student } = useParams();
  return (
    <section className="bio">
      <div className="bio-blurb">
        <h2>{ students[student].workTitle.toUpperCase() }</h2>
        <p>{ students[student].blurb }</p>
      </div>
      <div className="bio-author">
        <div className="bio-author-avatar"></div>
        <h3>{ students[student].name }</h3>
        <p>{ students[student].bio }</p>
      </div>
    </section>
  );
}

export default Bio;
