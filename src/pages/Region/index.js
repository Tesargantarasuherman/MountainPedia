import React from 'react'
import './index.scss'
import { AiOutlineEnvironment, AiOutlineSearch } from 'react-icons/ai'
export default function Region() {
    return (
        <section className='region' >
            <div className="dimmer" />
            <div className="body-banner" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2342&q=80)` }}>
                <div className="__banner-content">
                    <div className="__banner-search">
                        <div className="input-banner-search">
                            <AiOutlineEnvironment />
                            <input type="text" />
                            <button> <AiOutlineSearch /></button>
                        </div>
                    </div>
                    <p>Things to do in</p>
                    <p>Bromo</p>
                    <p>This paradise on Earth combines stunning scenery, incredible biodiversity, and fascinating architecture.</p>
                </div>
            </div>
        </section>
    )
}
