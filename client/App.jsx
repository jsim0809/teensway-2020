import React, { useState } from 'react';
import Header from './Header.jsx';
import Carousel from './Carousel.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';

function App() {
  const [page, setPage] = useState('home');

  return (
    <div>
      <Header />
      <Carousel />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;