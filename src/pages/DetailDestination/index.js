import React from 'react'
import { Banner, Container, ImageCollage } from '../../components'
import Slider from 'react-slick'
import './index.scss'
import { useState } from 'react'

function DetailDestination() {
    const [togglePopup, setTogglePopup] = useState(false)
    const setting = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };
    const popup = () => {
        setTogglePopup(!togglePopup)
    }
    return (
        <>
            <div className={`popup-slider ${togglePopup ? 'show' : 'hide'}`}>
                    <button onClick={popup}>X</button>
                <div>
                    <div className="container-slider">
                        <Slider {...setting}>
                            <div className='body-slider'>
                                <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
                            </div>
                            <div className='body-slider'>
                                <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
                            </div>
                            <div className='body-slider'>
                                <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
                            </div>
                            <div className='body-slider'>
                                <img src="https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80" className='img-content-slider' />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <Container el={
                <ImageCollage popup={popup}/>
            } />
        </>
    )
}

export default DetailDestination