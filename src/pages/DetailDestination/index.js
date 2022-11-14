import React from 'react'
import { Banner, Button, Card, Container, Footer, ImageCollage, Input, SearchForm } from '../../components'
import Slider from 'react-slick'
import './index.scss'
import { useState } from 'react'
import { Datetime } from '../../assets'
import ReactStars from 'react-stars'
import { motion } from 'framer-motion'
import { BottomSheet } from 'react-spring-bottom-sheet'

function DetailDestination() {
    const [togglePopup, setTogglePopup] = useState(false)
    const [initialY, setInitialY] = useState(-240)
    const [formActive,setFormActive]=useState(true)
    const [activeModal,setActiveModal]=useState(true)
    const [open, setOpen] = useState(true)

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
    const actionSetFormActive =()=>{
        if(initialY == 25){
            setInitialY(-240)
        }
        else{
            setInitialY(25)
        }
        setFormActive(!formActive)
    }
    return (
        <>
            <motion.div className={`sign ${activeModal ? 'sign-active':''}`} >
                <div className="main-sign">
                    <button className='close' onClick={()=>setActiveModal(!activeModal)}>
                        X
                    </button>
                    <div className="signup">
                        <form>
                        <label onClick={actionSetFormActive} className={`${formActive ? '':'active'}`}>Register</label>
                            <input type="text" name="txt" placeholder="User name" required />
                            <input type="email" name="email" placeholder="Email" required />
                            <input type="password" name="pswd" placeholder="Password" required />
                            <button>Sign up</button>
                        </form>
                    </div>
                    <motion.div animate={{ y: initialY  ,transition: {delay: 0.2,  x: { duration: 2 },  default: { ease: "linear" }}}} className="login">
                        <form>
                            <label onClick={actionSetFormActive} className={`${formActive ? 'active':''}`}>Login</label>
                            <input type="email" name="email" placeholder="Email" required />
                            <input type="password" name="pswd" placeholder="Password" required />
                            <button>Login</button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
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
                        Cairo: Dinner Cruise on the Nile River with Entertainment
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
                            <p>Enjoy a relaxing night out as you cruise down the Nile River while savoring an open buffet dinner. Watch belly dancers as they perform to classic Arabic songs along with a Tanoura show.</p>
                            <p className='title'>
                                About this activity
                            </p>
                            <div className="features">
                                <img src={Datetime} alt="" />
                                <div className="description">
                                    <label>Free Cancelation</label>
                                    <p>Cancel up to 24 hours in advance to receive a full refund</p>
                                </div>
                            </div>
                            <div className="features">
                                <img src={Datetime} alt="" />
                                <div className="description">
                                    <label>Free Cancelation</label>
                                    <p>Cancel up to 24 hours in advance to receive a full refund</p>
                                </div>
                            </div>
                            <div className="features">
                                <img src={Datetime} alt="" />
                                <div className="description">
                                    <label>Free Cancelation</label>
                                    <p>Cancel up to 24 hours in advance to receive a full refund</p>
                                </div>
                            </div>
                            <div className="features">
                                <img src={Datetime} alt="" />
                                <div className="description">
                                    <label>Free Cancelation</label>
                                    <p>Cancel up to 24 hours in advance to receive a full refund</p>
                                </div>
                            </div>
                            <div className="features">
                                <img src={Datetime} alt="" />
                                <div className="description">
                                    <label>Free Cancelation</label>
                                    <p>Cancel up to 24 hours in advance to receive a full refund</p>
                                </div>
                            </div>
                            <div className="features">
                                <img src={Datetime} alt="" />
                                <div className="description">
                                    <label>Free Cancelation</label>
                                    <p>Cancel up to 24 hours in advance to receive a full refund</p>
                                </div>
                            </div>
                            <div className="booking-asistant"  id="book-now">
                                <label>Select participants, date</label>
                                <div className="form">
                                    <Input />
                                    <Input />
                                    <Input />
                                    <Button title={'Check Availibility'} backgroundColor={'bg-white'}/>
                                </div>
                            </div>
                                <div className="list-booking">
                                    <p className="title">Double Sunset 3H Quad Bike, Camel Ride, and Bedouin Village</p>
                                    <div className="total-price">
                                        <p className="text">Total Price</p>
                                        <p className="price">Rp.450,599</p>
                                        <p className="description">All taxes and included</p>
                                    </div>
                                </div>
                        </div>
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
                                    <img src={Datetime} alt="" srcset="" className="icon" />
                                    <p className="description">
                                        Reserve now & pay later to book your spot and pay nothing today
                                    </p>
                                </div>
                            </div>
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

export default DetailDestination