import React from 'react';
import './Movies.css';

function Movies() {
  return (
    <div className="movies_main">
      <h4>Recommended For You</h4>
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
    </div>
  );
}

export default Movies;
