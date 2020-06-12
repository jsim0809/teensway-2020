import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleReturnTopClick = this.handleReturnTopClick.bind(this);
  }

  handleReturnTopClick() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <footer>
        <div className="footer-text">
          <p>©2020 WING LUKE MUSEUM OF THE ASIAN PACIFIC AMERICAN EXPERIENCE</p>
          <p>THE WING IS A 501(C)(3) NONPROFIT REGISTERED IN THE US UNDER EIN: 91-6067431</p>
          <a onClick={this.handleReturnTopClick} className="back-to-top-arrow">&#10094;</a>
        </div>
      </footer>
    );
  }
}

export default Footer;