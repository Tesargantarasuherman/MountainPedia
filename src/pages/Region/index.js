import React, { useRef, useState } from 'react'
import './index.scss'
import { AiOutlineCalendar, AiOutlineClose, AiOutlineEnvironment } from 'react-icons/ai'
import { CardGuide, Footer, Input } from '../../components'
import {RiArrowLeftRightFill} from 'react-icons/ri'
import {BiSearch} from 'react-icons/bi'
export default function Region() {
    const [inputForm, setInputForm] = useState('');
    const [type, setType] = useState('guide');

    const renderType = (active) => {
        switch (active) {
            case 'guide':
                return (
                    <div className="guide">
                        <CardGuide />
                        <CardGuide />
                        <CardGuide />
                        <CardGuide />
                    </div>
                )
            case 'pickup':
                return (
                    <div className="pickup">
                        <div className="form-input-pickup">
                            <Input icon={<AiOutlineEnvironment />} title={'Berangkat Dari'} type={'select-option'}/>
                            <button className='btn-reverse'>
                                <RiArrowLeftRightFill />
                            </button>
                            <Input icon={<AiOutlineEnvironment />} title={'Tujuan'} type={'select-option'} onChange={(e)=>console.log(e.target.value)}/>
                            <Input title="Tanggal Berangkat" type="Date" icon={<AiOutlineCalendar/>}/>
                            <button className='__btn-search'>
                                <BiSearch/>
                            </button>
                        </div>
                    </div>
                )
            default:
                return (
                    <div className="guide">
                        <p>Belum ada</p>
                    </div>
                )
        }
    }
   


    return (
        <section className='region'>
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
                    <button className={`${type =='guide'? 'active' :''}`} onClick={()=>setType('guide')}>Guide</button>
                    <button className={`${type =='pickup'? 'active' :''}`} onClick={()=>setType('pickup')}>Pickup</button>
                    <button className={`${type =='trip'? 'active' :''}`} onClick={()=>setType('trip')}>Open Trip</button>
                    <button className={`${type =='rent'? 'active' :''}`} onClick={()=>setType('rent')}>Rent</button>
                </div>
                {
                    renderType(type)
                }

            </div>
            <Footer />

        </section>
    )
}
