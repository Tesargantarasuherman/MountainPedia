import React from 'react'
import Slider from "react-slick";
import Flickity from 'react-flickity-component'

import { Button } from '../../atoms'
import './index.scss'
function ImageCollage({ popup }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const flickityOptions = {
    initialIndex: 2
  }
  return (
    <div className='image-collage'>
      <div className='desktop'>
        <div className="button-view-all">
          <Button title={'View All'} onClick={popup} />
        </div>
        <div className='content-collage'>
          <img src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcSet="" />
          <img src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcSet="" />
          <img src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcSet="" />
          <img src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcSet="" />
        </div>
      </div>
      <div className='mobile'>
        <Slider {...settings}>
          <div className='body-img-carousel-mobile'>
            <img src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcSet="" className='img-carousel-mobile' />
          </div>
          <div className='body-img-carousel-mobile'>
            <img src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcSet="" className='img-carousel-mobile' />
          </div>
          <div className='body-img-carousel-mobile'>
            <img src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcSet="" className='img-carousel-mobile' />
          </div>
        </Slider >
      </div>
    </div>
  )
}

export default ImageCollage