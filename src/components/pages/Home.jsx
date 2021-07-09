import React from 'react';
import './Home.css';
import ImageSlider from '../ImageSlider';
import Viewers from '../Viewers';
import Movies from '../Movies';

function Home() {
  return (
    <div className="home_main">
      <h1>Home</h1>
      <ImageSlider />
      <Viewers />
      <Movies />
    </div>
  );
}

export default Home;
