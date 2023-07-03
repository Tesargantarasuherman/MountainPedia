import React, { useState } from 'react'
import './index.scss'
import { AiOutlineClose, AiOutlineEnvironment } from 'react-icons/ai'

function BannerRegion() {
    const [inputForm, setInputForm] = useState('');
    return (
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
    )
}

export default BannerRegion
