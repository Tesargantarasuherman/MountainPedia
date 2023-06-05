import React, { useRef, useState } from 'react'
import './index.scss'
import { AiOutlineClose, AiOutlineEnvironment, AiOutlineSearch } from 'react-icons/ai'
import { CardGuide, Footer, ImageCollage, MapLeaflet } from '../../components'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { iconPerson } from '../../utils/icon';
import { MdVerified } from 'react-icons/md';
import {IoLocationSharp} from "react-icons/io5";

export default function Region() {
    const [inputForm, setInputForm] = useState('');
    return (

        <section className='region' onClick={() => console.log('run')}>
            <div className="banner-region">
                <div className="dimmer" />
                <div className="body-banner" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80)` }}>
                    <div className="__banner-content">
                        <div className="__banner-search">
                            <div className="input-banner-search">
                                <AiOutlineEnvironment />
                                <input type="text" placeholder='Where are you going?' value={inputForm} onChange={(e) => setInputForm(e.target.value)} />
                                <div className={`clear-all ${inputForm != '' ? 'active' : ''}`} onClick={() => setInputForm('')}><AiOutlineClose /></div>
                                <button>Search</button>
                            </div>
                        </div>
                        <p className='__banner_title'>Things to do in</p>
                        <p className='__banner_location'>Semeru</p>
                        <p className='__banner_description'>This paradise on Earth combines stunning scenery, incredible biodiversity, and fascinating architecture.</p>
                    </div>
                </div>
            </div>
            <div className="content-region">
                <div className="category-trip">
                    <button className='active'>Guide</button>
                    <button>Ticket</button>
                    <button>Open Trip</button>
                    <button>Rent</button>
                </div>
                <div className="info-region">
                    <CardGuide />
                    <CardGuide />
                    <CardGuide />
                    <CardGuide />
                </div>
            </div>
            <Footer />
            <div className="modal-guide">
                <div className="modal-guide-content">
                    <div className="__icon">
                        <AiOutlineClose />
                    </div>
                    <div className="info-guide">
                        <div className="detail-name">
                            <div className="__img-guide" style={{ backgroundImage: `url(https://a0.muscache.com/im/pictures/user/08586a25-5872-4b47-97b4-5d74678b9877.jpg?im_w=240)` }}>
                                <MdVerified />
                            </div>
                            <div className="guide-name">
                                <p>Gantara</p>
                                <p><IoLocationSharp/> Indonesia</p>
                            </div>
                        </div>
                        <div className="rating-guide">
                            <div className='content-rating'>
                                <p>171</p>
                                <p>ulasan</p>
                            </div>
                            <hr />
                            <div className='content-rating'>
                                <p>171</p>
                                <p>ulasan</p>
                            </div>
                            <hr />
                            <div className='content-rating'>
                                <p>171</p>
                                <p>ulasan</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
