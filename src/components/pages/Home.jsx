import React from 'react';
import './Home.css';
import ImageSlider from '../ImageSlider';
import Viewers from '../Viewers';
import Movies from '../Movies';

function Home() {
  return (
    <div className="home_main">
      <ImageSlider />
      <Viewers />
      <Movies />
    </div>
  );
}

export default Home;
