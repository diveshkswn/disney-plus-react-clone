/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { current } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Detail.css';
import Movies from './Movies';

function Detail() {
  const history = useHistory();
  const currentMovie = useSelector((state) => state.movie.currentMovie);
  useEffect(() => {
    if (!currentMovie.id) {
      history.push('/');
    }
  }, []);

  return (
    <div className="detail_main">
      <div className="detail_bg">
        <img src={currentMovie.backgroundImg} alt="" />
      </div>
      <div className="detail_title">
        <img src={currentMovie.titleImg} alt="" />
      </div>
      <div className="details_controls">
        <button className="details_playButton">
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </button>
        <button className="details_trailerButton">
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </button>
        <button className="details_addButton">
          <span>+</span>
        </button>
        <button className="details_grpWatchButton">
          <img src="/images/group-icon.png" alt="" />
        </button>
      </div>
      <div className="details_description">
        {currentMovie.subTitle}
      </div>
      <div className="details_subtitle">
        {currentMovie.description}
      </div>

    </div>
  );
}

export default Detail;
