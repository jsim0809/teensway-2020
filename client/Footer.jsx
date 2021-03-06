import React from 'react';

function Footer() {
  const handleReturnTopClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <footer>
      <div className="footer-text">
        <p>©2020 WING LUKE MUSEUM OF THE ASIAN PACIFIC AMERICAN EXPERIENCE</p>
        <p className="right-align">THE WING IS A 501(C)(3) NONPROFIT REGISTERED IN THE US UNDER EIN: 91-6067431</p>
        <a onClick={handleReturnTopClick} className="back-to-top-arrow"><i className="fas fa-chevron-up"></i></a>
      </div>
    </footer>
  );
}

export default Footer;