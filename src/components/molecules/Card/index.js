import React from 'react'
import { Button } from '../../atoms'
import './index.scss'
import ReactStars from 'react-stars'
import { Location, Ticket } from '../../../assets'

export default function Card() {
    return (
        <div className="card">
            <div className="card-header">
                <img src="https://images.unsplash.com/photo-1529989400578-857960dd64f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1633&q=80" alt="" className="card-img" />
                <p className="title">
                    <Button title='Hiking' type="small" rounded="rounded-md" />
                </p>
                <span class="lnr lnr-heart"></span>
                <div className="type">
                    <img src={Location} alt="" srcset="" />
                    <p className="type-text">Mount. Semeru</p>
                </div>
            </div>
            <div className="card-body">
                <div className="rating">
                    <ReactStars
                        count={5}
                        onChange={null}
                        size={24}
                        color2={'#ffd700'}value={4.5}
                         />
                    <div className="rating-text">
                        (469 Review)
                    </div>
                </div>
                <p className="title">
                    Lorem, ipsum.
                </p>
                <div className="content">
                    <div className="body-content">
                        <p className="label">
                            Tour Type
                        </p>
                        <p className="description">
                            Ticket
                        </p>
                    </div>
                    <div className="body-content">
                        <p className="label">
                            Price Starting
                        </p>
                        <p className="description">
                            Rp. 50.000
                        </p>
                    </div>
                    <div className="body-content">
                        <p className="label">
                            From
                        </p>
                        <p className="description">
                            per person
                        </p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="card-footer-title">
                    Available Today
                </div>
                <div className="card-footer-ticket">
                    <img src={Ticket} alt="" />
                    <p>Book Now</p>
                </div>
            </div>
        </div>
    )
}
