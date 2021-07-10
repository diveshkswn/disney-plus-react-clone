import React, { useEffect } from 'react';
import './Home.css';
import { useDispatch } from 'react-redux';
import ImageSlider from '../ImageSlider';
import Viewers from '../Viewers';
import Movies from '../Movies';
import useFirestore from '../../customHooks/useFirestore';
import { setMovies } from '../../features/movie/movieSlice';

function Home() {
  const { docs } = useFirestore('movies');
  const dispatch = useDispatch();

  useEffect(() => {
    if (docs.length > 0) dispatch(setMovies(docs));
  }, [docs.length]);

  return (
    <div className="home_main">
      <ImageSlider />
      <Viewers />
      <Movies />
    </div>
  );
}

export default Home;
