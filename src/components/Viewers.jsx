/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState } from 'react';
import './Viewers.css';

function Viewers() {
  const [load, setLoad] = useState(false);
  return (
    <div className="viewers_main">
      <div className="viewers_wrap">

        <img src="/images/viewers-disney.png" alt="viewers_img" />
        <video playsInline autoPlay preload="auto" loop className="viewers_video" muted>
          <source type="video/mp4" src="/videos/1564674844-disney.mp4" />
        </video>

      </div>
      <div className="viewers_wrap">
        <img src="/images/viewers-marvel.png" alt="viewers_img" />
        <video playsInline autoPlay preload="auto" loop className="viewers_video" muted>
          <source type="video/mp4" src="/videos/1564676115-marvel.mp4" />
        </video>
      </div>
      <div className="viewers_wrap">
        <img src="/images/viewers-pixar.png" alt="viewers_img" />
        <video playsInline autoPlay preload="auto" loop className="viewers_video" muted>
          <source type="video/mp4" src="/videos/1564676714-pixar.mp4" />
        </video>
      </div>
      <div className="viewers_wrap">
        <img src="/images/viewers-starwars.png" alt="viewers_img" />
        <video playsInline autoPlay preload="auto" loop className="viewers_video" muted>
          <source type="video/mp4" src="/videos/1608229455-star-wars.mp4" />
        </video>
      </div>
      <div className="viewers_wrap">
        <img src="/images/viewers-national.png" alt="viewers_img" />
        <video playsInline autoPlay preload="auto" loop className="viewers_video" muted>
          <source type="video/mp4" src="/videos/1564676296-national-geographic.mp4" />
        </video>
      </div>
    </div>
  );
}

export default Viewers;
