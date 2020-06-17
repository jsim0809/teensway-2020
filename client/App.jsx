import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import BigHeader from './BigHeader.jsx';
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import Gallery from './Gallery.jsx';
import Comic from './Comic.jsx';
import Bio from './Bio.jsx';
import AboutTheClass from './AboutTheClass.jsx';
import AboutTheTeachers from './AboutTheTeachers.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Switch>
      <Route exact path="/">
        <div>
          <BigHeader />
          <Carousel />
          <Gallery />
          <Footer />
        </div>
      </Route>
      <Route path="/about">
        <div>
          <Header />
          <AboutTheClass />
          <AboutTheTeachers />
          <Footer />
        </div>
      </Route>
      <Route path="/contact">
        <div>
          <Header />
          <Contact />
          <Footer />
        </div>
      </Route>
      <Route path="/:student" children={
        <div>
          <Header />
          <Comic />
          <Bio />
          <Footer />
        </div>
      } />
    </Switch>
  );
}

export default App;
