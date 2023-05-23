import React, { useRef, useState } from 'react'
import './index.scss'
import { AiOutlineClose, AiOutlineEnvironment, AiOutlineSearch } from 'react-icons/ai'
import { Footer, ImageCollage, MapLeaflet } from '../../components'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { iconPerson } from '../../utils/icon';
export default function Region() {
    const [inputForm, setInputForm] = useState('');
    const [center, setCenter] = useState([-8.0119206, 112.8794226])
    const [location, setLocation] = useState([
        {
            lat: -8.0119206,
            lng: 112.8794226,
            title: 'Basecamp',
            info: 'Ranu Pani (1200 MDPL)',
        },
        {
            lat: -8.409518,
            lng: 115.188919,
            title: 'First Destination',
            info: 'bali',
        },
        {
            lat: -8.27186724586,
            lng: 115.159254363,
            title: 'Next Destination',
            info: 'Pura ulun danu',
        },
        {
            lat: -8.745529,
            lng: 115.155423,
            title: 'End Trip',
            info: 'Ngurah rai international airpot,Bali. Indonesia',
        }
    ])
    return (

        <section className='region' >
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
                    <button className='active'>Info</button>
                    <button>Guide</button>
                    <button>Booking</button>
                    <button>Rent</button>
                </div>
                <div className="info-region">
                    <ImageCollage />
                    <div className="__map">
                        <MapLeaflet location={location} center={center}/>
                    </div>
                </div>
            </div>
                <Footer />
        </section>
    )
}
