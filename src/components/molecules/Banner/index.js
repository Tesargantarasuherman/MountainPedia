import React from 'react'
import { Image, Shimmer } from 'react-shimmer'
import { SearchForm } from '../../atoms'
import './index.scss'
import Slider from "react-slick";

export default function Banner() {
  const settings = {
    dots: true,
    autoplay:true,
    autoplaySpeed:3000,
    speed: 1000,
    arrows:false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight:true,
    appendDots: dots => (
      <div
       id='dots-number-banner'
      >
        <ul id="ul-dots-number-banner" style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <div className="banner">
      <div className="banner-left">
        <div className="content-banner">
          <Slider {...settings}>
            <div className='content-banner-description'>
              <p className='__title'>Plan Your Trip with Travel Hous</p>
              <p className='__description'>Plan Your Trip with Travel Hous</p>
            </div>
            <div className='content-banner-description'>
              <p className='__title'>Find Plan Your Trip with Travel Hous</p>
              <p className='__description'>Find Plan Your Trip with Travel Hous</p>
            </div>
            <div className='content-banner-description'>
              <p className='__title'>Find Plan Your Trip with Travel Hous</p>
              <p className='__description'>Find Plan Your Trip with Travel Hous</p>
            </div>
          </Slider>
        </div>

      </div>
      <div className="banner-right">
        <Image src="https://images.unsplash.com/photo-1624104416015-f0ef71c7800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80" alt="" srcSet="" fallback={<Shimmer width={'100%'} height={'100%'} />} />
      </div>
      <div className="banner-img-content">
        <Image src="https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZSUyMGlsdXN0cmF0aW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" fallback={<Shimmer width={50} height={50} />} />
        <Image src="https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZSUyMGlsdXN0cmF0aW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" fallback={<Shimmer width={50} height={50} />} />
        <Image src="https://images.unsplash.com/photo-1489657780376-e0d8630c4bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhbmRzY2FwZSUyMGlsdXN0cmF0aW9ufGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" fallback={<Shimmer width={50} height={50} />} />
      </div>
      <SearchForm />
    </div>
  )
}
