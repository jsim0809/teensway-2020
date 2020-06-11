import React from 'react';
import BigHeader from './BigHeader.jsx';
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import Gallery from './Gallery.jsx';
import Comic from './Comic.jsx';
import Bio from './Bio.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';


import students from '../public/database/students.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home'
    }
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleAboutClick = this.handleAboutClick.bind(this);
    this.handleContactClick = this.handleContactClick.bind(this);
  }

  handleHomeClick() {
    this.setState({
      page: 'home'
    });
  }

  handleAboutClick() {
    this.setState({
      page: 'about'
    });
  }

  handleContactClick() {
    this.setState({
      page: 'contact'
    });
  }

  render() {
    const { page } = this.state;
    switch (page) {
      case 'home':
        return (
          <div>
            <BigHeader
              handleHomeClick={this.handleHomeClick}
              handleAboutClick={this.handleAboutClick}
              handleContactClick={this.handleContactClick}
              />
            <Carousel />
            <Gallery students={students}/>
            <Footer />
          </div>
        );
      case 'about':
        return (
          <div>
            <Header />
            <Comic student={page} />
            <Bio student={page} />
            <Footer />
          </div>
        );
      case 'contact':
        return (
          <div>
            <Header />
            <Comic student={page} />
            <Bio student={page} />
            <Footer />
          </div>
        );
      default:
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
