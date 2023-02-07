import React from 'react'
import { Banner, Button, Card, Container, Footer, ImageCollage, Input, ListBooking, SearchForm } from '../../components'
import Slider from 'react-slick'
import './index.scss'
import { useState } from 'react'
import { Datetime } from '../../assets'
import ReactStars from 'react-stars'
import { connect } from 'react-redux'
import { getDetailProduct } from '../../actions'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker'

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
export const DetailDestiation = (props) => {
    const [togglePopup, setTogglePopup] = useState(false)
    const [initialY, setInitialY] = useState(-240)
    const [formActive, setFormActive] = useState(true)
    let params = useParams();
    useEffect(() => {
        props.getDetailProduct(params.id);
    }, [])

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
                <div className='detail-destination-header'>
                    <div className="breadcumb">
                        <p>Egypt <span className="lnr lnr-chevron-right tiny" /></p>
                        <p>Cairo Region <span className="lnr lnr-chevron-right tiny" /></p>
                        <p>Things to do in Cairo </p>
                    </div>
                    <div className="category-destination">
                        <p>Hiking</p>
                    </div>
                    <h1>
                        {props.product.title}
                    </h1>
                    <div className="rating-destination">
                        <ReactStars
                            count={5}
                            onChange={null}
                            size={24}
                            color2={'#ffd700'} value={4.5}
                        />
                        <p>4.5 / 5</p>
                        <p>959 reviews</p>
                        <p>Activity provider: </p>
                        <p>Emo Tours Egypt</p>
                    </div>
                </div>
            } />
            <Container el={
                <ImageCollage popup={popup} />
            } />
            <Container marginTop={30} justify="space-between" el={
                <>
                    <div className="detail-description">
                        <div className="detail-description-left">
                            <p>{props.product.body}</p>
                            <p className='title'>
                                About this activity
                            </p>
                            <div className="features">
                                <div className="features-img"></div>
                                <div className="description">
                                    <label>Free Cancelation</label>
                                    <p>Cancel up to 24 hours in advance to receive a full refund</p>
                                </div>
                            </div>
                            <div className="features">
                                <div className="features-img"></div>
                                <div className="description">
                                    <label>Free Cancelation</label>
                                    <p>Cancel up to 24 hours in advance to receive a full refund</p>
                                </div>
                            </div>
                            <div className="features">
                                <div className="features-img"></div>
                                <div className="description">
                                    <label>Free Cancelation</label>
                                    <p>Cancel up to 24 hours in advance to receive a full refund</p>
                                </div>
                            </div>

                        </div>
                        {/* Right Side */}
                        <div className="detail-description-right">
                            <div className="detail-description-right-content">
                                <div className="detail-description-right-content-price-book">
                                    <div>
                                        <p className="detail-description-right-content-title">
                                            Price
                                        </p>
                                        <p className="price">
                                            Rp 492,648
                                        </p>
                                        <p className="detail-description-right-content-title">
                                            per person
                                        </p>
                                    </div>
                                    <a href="#book-now">Book Now</a>
                                    {/* <Button title={'Book Now'}  /> */}
                                </div>
                                <div className="detail-description-right-content-pay-info">
                                    <div className="detail-description-right-content-pay-info-img" />
                                    <p className="description">
                                        Reserve now & pay later to book your spot and pay nothing today
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            } />
            <Container margintTop={20} el={
                <>
                    <div className="booking">
                        <div className="left">
                            <div className="booking-asistant" id="book-now">
                                <label>Select participants, date</label>
                                <div className="form">
                                    <Input />
                                    <Input />
                                    <Input />
                                    <Button title={'Check Availibility'} backgroundColor={'bg-white'} />
                                </div>
                            </div>
                            <ListBooking id={1} />
                            <ListBooking id={2} />
                            <ListBooking id={3} />
                        </div>
                        <div className="right">
                            <Line options={options} data={data} />
                        </div>
                    </div>
                </>
            } />
            <Container marginTop={20} el={
                <Footer />
            } />
        </>
    )
}

const mapStateToProps = (state) => ({
    product: state?.product?.product
})

const mapDispatchToProps = {
    getDetailProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailDestiation)
