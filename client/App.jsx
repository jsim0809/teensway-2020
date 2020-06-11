import React, { useState } from 'react';
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import Gallery from './Gallery.jsx';
import Comic from './Comic.jsx';
import Bio from './Bio.jsx';
import Footer from './Footer.jsx';

import students from '../public/database/students.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }
  }

  render() {
    const { page } = this.state;
    if (page === 'home') {
      return (
        <div>
          <Header />
          <Carousel />
          <Gallery students={students}/>
          <Footer />
        </div>
      );
    } else {
      return (
        <div>
          <Header />
          <Comic student={page} />
          <Bio student={page} />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
