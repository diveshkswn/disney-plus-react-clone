/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './Detail.css';
// 2:37
function Detail() {
  return (
    <div className="detail_main">
      <div className="detail_bg">
        <img src="https://images.indianexpress.com/2021/05/loki-1200.jpg" alt="" />
      </div>
      <div className="detail_title">
        <img src="/images/loki_png.png" alt="" />
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
      <div className="details_subtitle">
        Superhero Marvel U/A 13+
      </div>
      <div className="details_description">
        After stealing the Tesseract in “Avengers: Endgame,”
        Loki lands before the Time Variance Authority.
      </div>
    </div>
  );
}

export default Detail;
