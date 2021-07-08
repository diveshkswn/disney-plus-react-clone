/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './ImageSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
// 1:15
function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="ImageSlider_main">
      <Slider {...settings}>
        <div className="imageSlider_wrap">
          <img src="/images/slider-badging.jpg" alt="slider_img" />
        </div>
        <div className="imageSlider_wrap">
          <img src="/images/slider-badag.jpg" alt="slider_img" />
        </div>
      </Slider>

    </div>

  );
}

export default ImageSlider;
