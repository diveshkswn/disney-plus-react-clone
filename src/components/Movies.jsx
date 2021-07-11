/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCurrentMovie } from '../features/movie/movieSlice';
import './Movies.css';

function Movies() {
  const movies = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();
  function handleDetail(movie) {
    dispatch(setCurrentMovie(movie));
  }

  function populateMovies(movie) {
    return (
      <div key={movie.id} className="movies_wrap" onClick={() => { handleDetail(movie); }}>
        <Link to="/detail">
          <img src={movie.cardImg} alt="" />
        </Link>

      </div>
    );
  }

  return (
    <div className="movies_main">
      <h4>Recommended For You</h4>
      <h6>***No detail page. Only for card purpose</h6>
      <div className="movies_content">
        <div className="movies_wrap">
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/1684/1011684-v-374e17c7e183" alt="" />
        </div>
        <div className="movies_wrap">
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6370/936370-v" alt="" />
        </div>
        <div className="movies_wrap">
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v" alt="" />
        </div>
        <div className="movies_wrap">
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5117/675117-v" alt="" />
        </div>
        <div className="movies_wrap">
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/5171/875171-v" alt="" />
        </div>

        <div className="movies_wrap">
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4971/674971-v" alt="" />
        </div>
      </div>
      <h4>Disney+ Originals</h4>
      <div className="movies_content">

        {movies && movies.map(populateMovies)}
      </div>
    </div>
  );
}

export default Movies;
