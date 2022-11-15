import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Datetime } from '../../../assets'
import { Button } from '../../atoms'
import './index.scss'

function ListBooking({ id }) {
    const [openListBooking, setOpenListBooking] = useState(null)

    const actionSetListBookingActive = (id) => {
        setOpenListBooking(id)
    }


    return (
        <div className={`list-booking `}>
            <div className={`list-booking-content`}>
                <div className="heading">
                    <p className="title">Double Sunset 3H Quad Bike, Camel Ride, and Bedouin Village</p>
                    <div className="total-price">
                        <div className="total-price-text">
                            <p className="text">Total Price</p>
                            <p className="price">Rp.444,599</p>
                            <p className="description">All taxes and included</p>
                        </div>
                        <div className="total-price-action">
                            {
                                openListBooking === id ? (
                                    <span className="lnr icon-price-down lnr-checkmark-circle"></span>
                                ) : (
                                    <Button title={<span className="lnr lnr-chevron-down"></span>} onClick={()=>actionSetListBookingActive(id)}/>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className={`booking-price-description ${openListBooking === id ? 'active' : ''}`}>
                    <div className="starting-price">
                        <p className="text">Starting time</p>
                        <p className="time">6:00 PM</p>
                    </div>
                    <div className="price-breakdown">
                        <p className="text">Price Breakdown</p>
                        <div className="description">
                            <p className="description-text">Adult x Rp 450,599</p>
                            <p className="description-price">Rp 450,599</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`list-booking-footer ${openListBooking === id ? 'active' : ''}`}>
                <div className={`list-booking-footer-content`}>
                    <img src={Datetime} />
                    <p className="list-booking-footer-content-description">
                        Cancel before 4:00 PM on December 4 for a full refund
                    </p>
                </div>
                <div className="list-booking-footer-content">
                    <img src={Datetime} />
                    <p className="list-booking-footer-content-description">
                        Cancel before 4:00 PM on December 4 for a full refund
                    </p>
                </div>
                <Button title={'Add to cart'} />
            </div>
        </div>
    )
}

export default ListBooking