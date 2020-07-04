import React from 'react';

function LightboxModal({ image, handleLightboxExitClick }) {
  return (
    <div className="darkbox" onClick={handleLightboxExitClick}>
      <div className="lightbox">
        <img src={image} alt="" className="lightbox-image" onClick={handleLightboxExitClick} />
      </div>
    </div>
  )
}

export default LightboxModal;
