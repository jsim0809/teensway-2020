import React from 'react';

function Bio({ student }) {
  return (
    <section className="bio">
      <div className="bio-blurb">
        <h2>ALL EAT CANDY</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis ad porro ipsa dicta quia assumenda vero vel commodi excepturi mollitia iste harum, perspiciatis, beatae tempora. Ab dolorem perferendis corrupti!</p>
      </div>
      <div className="bio-author">
        <div className="bio-author-avatar"></div>
        <h3>Ezra Li Parker</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quis ad porro ipsa dicta quia assumenda vero vel commodi excepturi mollitia iste harum, perspiciatis, beatae tempora. Ab dolorem perferendis corrupti!</p>
      </div>
    </section>
  );
}

export default Bio;
