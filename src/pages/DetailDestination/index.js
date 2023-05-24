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
  import { AiOutlineSchedule } from "react-icons/ai";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  

export const DetailDestiation = (props) => {
    const [togglePopup, setTogglePopup] = useState(false)
    let params = useParams();
    const d = new Date();
    const[dated,setDated] = useState(null);
    const [year,setYear] = useState([2021,2022,2023])
    const _dateValue = {year:d.getFullYear(),month:d.getMonth() + 1}
    const [dateValue,setDateValue] = useState(_dateValue)

    const[month,setMonth] = useState([
        {
            'id':1,
            'name':'Januari',
        },
        {
            'id':2,
            'name':'Februari',
        },
        {
            'id':3,
            'name':'Maret',
        },
        {
            'id':4,
            'name':'April',
        },
        {
            'id':5,
            'name':'Mei',
        },
        {
            'id':6,
            'name':'Juni',
        },
        {
            'id':7,
            'name':'Juli',
        },
        {
            'id':8,
            'name':'Agustus',
        },
        {
            'id':9,
            'name':'September',
        },
        {
            'id':10,
            'name':'Oktober',
        },
        {
            'id':11,
            'name':'November',
        },
        {
            'id':12,
            'name':'Desember',
        },
    ])

    useEffect(() => {

        props.getDetailProduct(params.id);
        getDays(dateValue.year,dateValue.month);

      
    }, [dateValue])
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Statistik Kunjungan',
          },
        },
      };
      
      const labels = dated;
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Pengunjung',
            data: labels?.map(() => faker.datatype.number({ min: 1, max: 1000 })),
            borderColor: '#006E5D',
            backgroundColor: '#006E5D',
          },
        ],
      };

   


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
    const getDays = (year, month) => {
        let value_date = [];
        let length_date = new Date(year, month, 0).getDate();
        for(let i=1;i<=length_date;i++){
            value_date.push(i);
        }
        setDated(value_date)
    };
    
    const handleFilterChange = (e)=>{
        const{name,value} = e.target
       
        setDateValue({...dateValue,[name]:value})
        
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
                                <AiOutlineSchedule />
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
                            <div className="filter">
                                <div>
                                <label htmlFor="">Pilih Bulan</label>
                                <select name="month" id="" onChange={handleFilterChange}>
                                    {
                                        month.map(month=>{
                                            return <option value={month.id} selected={month.id == dateValue.month ? true :false}>{month.name}</option>
                                        })
                                    }
                                </select>
                                </div>
                                <div>
                                <label htmlFor="">Pilih Tahun</label>
                                <select  name="year" id="" onChange={handleFilterChange}>
                                    {
                                        year.map(year=>{
                                            return <option value={year} selected={year === dateValue.year ? true :false}>{year}</option>
                                        })
                                    }
                                </select>
                                </div>
                            </div>
                            <Line options={options} data={data} />
                        </div>
                    </div>
                </>
            } />
                <Footer />
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
