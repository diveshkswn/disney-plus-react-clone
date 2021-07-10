import React, { useEffect, useState } from 'react';
import './Home.css';
import ImageSlider from '../ImageSlider';
import Viewers from '../Viewers';
import Movies from '../Movies';
import useFirestore from '../../customHooks/useFirestore';

function Home() {
  const { docs } = useFirestore('movies');
  console.log(docs.length);

  return (
    <div className="home_main">

      <ImageSlider />
      <Viewers />
      <Movies />
    </div>
  );
}

export default Home;
