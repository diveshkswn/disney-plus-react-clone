/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './ImageSlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function ImageSlider() {
  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,

  };

  return (
    <div className="ImageSlider_main">
      <Slider {...settings}>

        <div className="imageSlider_wrap">
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1681/1011681-h-ac6ee255f074" alt="slider_img" className="imageSlider_img" />

        </div>
        <div className="imageSlider_wrap">
          <img src="/images/slider-badging.jpg" alt="slider_img" className="imageSlider_img" />
        </div>
        <div className="imageSlider_wrap">
          <img src="/images/slider-badag.jpg" alt="slider_img" className="imageSlider_img" />
        </div>
        <div className="imageSlider_wrap">
          <img src="/images/slider-scale.jpg" alt="slider_img" className="imageSlider_img" />
        </div>
        <div className="imageSlider_wrap">
          <img src="/images/slider-scales.jpg" alt="slider_img" className="imageSlider_img" />
        </div>
      </Slider>

    </div>

  );
}

export default ImageSlider;
