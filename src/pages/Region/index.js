import React, { useRef, useState } from 'react'
import './index.scss'
import { AiOutlineCalendar, AiOutlineClose, AiOutlineEnvironment } from 'react-icons/ai'
import { CardGuide, Footer, Input } from '../../components'
import { RiArrowLeftRightLine } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'
import { RxDotFilled, GoDot, RxDot } from 'react-icons/rx'

export default function Region() {
    const [inputForm, setInputForm] = useState('');
    const [type, setType] = useState('guide');
    const [arrival, setArrival] = useState('');
    const [derparture, setDerparture] = useState('');
    const [rotate, setRotate] = useState(false)

    const [listArrival, serListArrival] = useState(
        [
            {
                'id': 1,
                'title': 'Basecamp Ranu Pani',
                'value': 'basecamp_ranu_pani'
            },
            {
                'id': 2,
                'title': 'Pasar Tumpang',
                'value': 'pasar_tumpang'
            },
            {
                'id': 3,
                'title': 'Stasiun Malang',
                'value': 'stasiun_malang'
            },
            {
                'id': 4,
                'title': 'Terminal Malang',
                'value': 'terminal_malang'
            }

        ]
    )
    const [listDerparture, serListDerparture] = useState(
        [
            {
                'id': 1,
                'title': 'Basecamp Ranu Pani',
                'value': 'basecamp_ranu_pani'
            },
            {
                'id': 2,
                'title': 'Pasar Tumpang',
                'value': 'pasar_tumpang'
            },
            {
                'id': 3,
                'title': 'Stasiun Malang',
                'value': 'stasiun_malang'
            },
            {
                'id': 4,
                'title': 'Terminal Malang',
                'value': 'terminal_malang'
            }
        ]
    )
    const changeDestination = () => {
        if(arrival!="" && derparture !=""){
            setRotate(true)
            setTimeout(() => {
                setArrival(derparture)
                setDerparture(arrival)
                setRotate(false)
            }, 500);
        }



    }

    const renderType = (active) => {
        switch (active) {
            case 'guide':
                return (
                    <div className="guide">
                        <CardGuide type="Guide"/>
                    </div>
                )
            case 'pickup':
                return (
                    <div className="pickup">
                        <h2>Silahkan Pilih Jadwal Perjalanan Anda</h2>
                        <div className="form-input-pickup">
                            <Input icon={<AiOutlineEnvironment />} title={'Berangkat Dari'} value={derparture} listOption={listDerparture} type={'select-option'} onChange={(e) => setDerparture(e.target.value)} />
                            <button className={`btn-reverse ${rotate ? 'rotate' : ''}`} onClick={() => changeDestination()}>
                                <RiArrowLeftRightLine />
                            </button>
                            <Input icon={<AiOutlineEnvironment />} title={'Tujuan'} type={'select-option'} value={arrival} listOption={listArrival} onChange={(e) => setArrival(e.target.value)} />
                            <Input title="Tanggal Berangkat" type="Date" icon={<AiOutlineCalendar />} />
                            <button className='__btn-search'>
                                <BiSearch />
                            </button>
                        </div>
                        <div className="content-pickup">
                            <div className="count-result-content-pickup">
                                <label htmlFor="">Menampilkan 12 Jadwal</label>
                            </div>
                            <div className="body-content-pickup">
                                <div className="card-pickup-schedule">
                                    <div className="time-pickup-schedule">
                                        <div className="drop-point">
                                            <div className="start-point">
                                                <p>Titik naik</p>
                                                <p>Stasiun Malang</p>
                                            </div>
                                            <div className="end-point">
                                                <p>Titik turun</p>
                                                <p>Pasar Tumpang</p>
                                            </div>
                                            <div className="circle-top">
                                                <RxDotFilled />
                                            </div>
                                            <div className="circle-bottom">
                                                <RxDot />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="estimation-pickup-schedule">
                                        <div className="time">
                                            <p>21:00</p>
                                            <p>Estimasi 3 jam Perjalanan</p>

                                        </div>
                                        <div className="slot">
                                            <p>Tersedia <b>8</b> Kursi</p>

                                        </div>

                                    </div>
                                    <div className="price-pickup-schedule">
                                        <div className="price">
                                            <div className="type">
                                                <button>Premium</button>
                                                <button>Langsung</button>

                                            </div>
                                            <div className="value">
                                                <p>Rp.200.000,00</p>
                                                <p>Rp 100.000,00</p>
                                            </div>

                                        </div>
                                        <div className="buy">
                                            <button>Beli</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case 'trip':
                return(
                    <div className="trip">
                        <CardGuide type="Open Trip" />

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
                    <button className={`${type == 'guide' ? 'active' : ''}`} onClick={() => setType('guide')}>Guide</button>
                    <button className={`${type == 'pickup' ? 'active' : ''}`} onClick={() => setType('pickup')}>Pickup</button>
                    <button className={`${type == 'trip' ? 'active' : ''}`} onClick={() => setType('trip')}>Open Trip</button>
                    <button className={`${type == 'rent' ? 'active' : ''}`} onClick={() => setType('rent')}>Rent</button>
                </div>
                {
                    renderType(type)
                }

            </div>
            <Footer />

        </section>
    )
}
