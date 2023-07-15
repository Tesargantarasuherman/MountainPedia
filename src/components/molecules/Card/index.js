import React from 'react'
import { Button } from '../../atoms'
import './index.scss'
import ReactStars from 'react-stars'
import { Location, Ticket } from '../../../assets'
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import { AiFillCaretLeft, AiOutlineEnvironment } from 'react-icons/ai'
export default function Card({id,image,title}) {
    const slashMotion = {
        rest: { y: 80 },
        hover: {
            y: 0
        },
        transition: {
            delay: 0.5
        }
    }
    return (
        <div className="card">
            <div className="card-header">
                <div  style={{backgroundImage:`url(${image})` }} alt="" className="card-img" ></div>
                <p className="title">
                    <Button title='Hiking' type="small" rounded="rounded-md" />
                </p>
                <span class="lnr lnr-heart"></span>
                <div className="type">
                    <AiOutlineEnvironment />
                    {/* <img src={Location} alt="" srcSet="" loading='lazy'/> */}
                    <p className="type-text">Mount. Semeru</p>
                </div>
            </div>
            <div className="card-body">
                <div className="rating">
                    <ReactStars
                        count={5}
                        onChange={null}
                        size={24}
                        color2={'#ffd700'} value={4.5}
                    />
                    <div className="rating-text">
                        (469 Review)
                    </div>
                </div>
                <p className="title">
                    {title.substring(0,20)}
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
            <Link to={`/detail/${id}`}>
                <motion.div initial="rest" whileHover="hover" animate="rest" className="card-footer">
                    <div className='card-footer-body'>
                        <div className="card-footer-body-title">
                            Available Today
                        </div>
                        <div className="card-footer-body-ticket">
                            <img src={Ticket} alt="" />
                            <p>Book Now</p>
                        </div>
                    </div>
                        <motion.div variants={slashMotion} className="book-now">
                            <p>BOOK NOW</p>
                        </motion.div>
                </motion.div>
            </Link>
           
        </div>
    )
}
