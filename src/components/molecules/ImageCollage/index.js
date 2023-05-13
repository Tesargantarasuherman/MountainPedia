import React, { useState } from 'react'
import Slider from "react-slick";
import { Button } from '../../atoms'
import './index.scss'
import { FiChevronLeft, FiChevronRight} from "react-icons/fi";
import { TfiLayoutGrid3Alt} from "react-icons/tfi";

function ImageCollage({ popup }) {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: dots => (
      <div
       id='dots-number'
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    // customPaging: i => (
    //   <div
    // id='number-paging'
    //   >
    //     {i + 1}
    //   </div>
    // )
  };
  
  return (
    <div className='image-collage'>
      <div className='desktop'>
        <div className="button-view-all">
          <Button title={'View All'} onClick={popup} icon={<TfiLayoutGrid3Alt /> } backgroundColor={`bg-transparent`}/>
        </div>
        <div className='content-collage'>
          <div style={{backgroundImage:`url(https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80)`}} />
          <div style={{backgroundImage:`url(https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80)`}} />
          <div style={{backgroundImage:`url(https://images.unsplash.com/photo-1524675053444-52c3ca294ad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)`}} />
          <div style={{backgroundImage:`url(https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`}} />
          {/* <img src="" alt="" srcSet="" />
          <img src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcSet="" />
          <img src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcSet="" />
          <img src="https://images.unsplash.com/photo-1586168078017-03cbb0884291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80" alt="" srcSet="" /> */}
        </div>
      </div>
      <div className='mobile'>
        <Slider ref={slider} {...settings}>
          <div className='body-img-carousel-mobile'>
            <img src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcSet="" className='img-carousel-mobile'/>
          </div>
          <div className='body-img-carousel-mobile'>
            <img src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcSet="" className='img-carousel-mobile' />
          </div>
          <div className='body-img-carousel-mobile'>
            <img src="https://images.unsplash.com/photo-1592364395653-83e648b20cc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" srcSet="" className='img-carousel-mobile' />
          </div>
        </Slider >
        <button className="btn-prev" onClick={() => slider?.current?.slickPrev()} >
        <FiChevronLeft/>
        </button>
        <button className="btn-next" onClick={() => slider?.current?.slickNext()}>
        <FiChevronRight/>
        </button>
      </div>
    </div>
  )
}

export default ImageCollage