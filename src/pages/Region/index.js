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
    const [rotate, setRotate] = useState(false);
    const [listDerparturePick, setListDerpaturePick] = useState(null);

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
    const [detailDeparture, setDetailDeparture] = useState([
        {
            id: 1,
            titik_naik: 'pasar_tumpang',
            title_naik: 'Pasar Tumpang',
            title_turun: 'Basecamp Ranu Pani',
            titik_turun: 'basecamp_ranu_pani',
            data: {
                waktu_berangkat: '08:00',
                estimasi: ' 1 jam Perjalanan',
                sisa_kursi: 8,
                tipe_tiket: 'Premium',
                tipe_perjalanan: 'Langsung',
                harga: 120000,
                harga_setelah_diskon: 100000
            }
        },
        {
            id: 2,
            titik_naik: 'pasar_tumpang',
            title_naik: 'Pasar Tumpang',
            title_turun: 'Basecamp Ranu Pani',
            titik_turun: 'basecamp_ranu_pani',
            data: {
                waktu_berangkat: '09:00',
                estimasi: ' 1 jam Perjalanan',
                sisa_kursi: 8,
                tipe_tiket: 'Premium',
                tipe_perjalanan: 'Langsung',
                harga: 120000,
                harga_setelah_diskon: 100000
            }
        }
    ])

    const getPickupList = () => {
        const result = detailDeparture.filter(d => d.titik_naik == derparture && d.titik_turun == arrival);
        setListDerpaturePick(result);

        // detailDeparture.filter((d) => {
        //     if (d.titik_naik == derparture && d.titik_turun == arrival) {
        //         console.log([d])
        //         setListDerpaturePick([d])
        //     }
        //     else {
        //         setListDerpaturePick([])
        //     }
        // }
        // )
        // setTimeout(() => {
        //     console.log(listDerparturePick,'list')
            
        // }, 500);
    }

    const changeDestination = () => {
        if (arrival != "" && derparture != "") {
            setRotate(true)
            setTimeout(() => {
                setArrival(derparture)
                setDerparture(arrival)
                setRotate(false)
            }, 500);
        }



    }
    const showingSchedule =()=>{
        if (listDerparturePick !== null) {
            if(listDerparturePick.length >= 1){
                return(
                <div className="count-result-content-pickup">
                    <label htmlFor="">Menampilkan {listDerparturePick.length} Jadwal</label>
                </div>  
            )
            }
            else{
                return(
                    <div className="count-result-content-pickup">
                        <label htmlFor="">Tidak Ada Jadwal</label>
                    </div>  
                )
            }
        }
    }
    const renderListPickup = () => {
        if (listDerparturePick !== null) {
            return (
                listDerparturePick.map(list => {
                    return (
                        <div className="body-content-pickup">
                            <div className="card-pickup-schedule">
                                <div className="time-pickup-schedule">
                                    <div className="drop-point">
                                        <div className="start-point">
                                            <p>Titik naik</p>
                                            <p>{list.title_naik}</p>
                                        </div>
                                        <div className="end-point">
                                            <p>Titik turun</p>
                                            <p>{list.title_turun}</p>
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
                                        <p>{list.data.waktu_berangkat}</p>
                                        <p>{list.data.estimasi}</p>
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
                                            <p>Rp.{list.data.harga}</p>
                                            <p>Rp {list.data.harga_setelah_diskon}</p>
                                        </div>

                                    </div>
                                    <div className="buy">
                                        <button>Beli</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }

    const renderType = (active) => {
        switch (active) {
            case 'guide':
                return (
                    <div className="guide">
                        <CardGuide type="Guide" />
                    </div>
                )
            case 'pickup':
                return (
                    <div className="pickup">
                        <h2>Silahkan Pilih Jadwal Perjalanan Anda</h2>
                        <div className="body-form-input" style={{backgroundImage:`url('https://cdn.dribbble.com/userupload/3795738/file/original-2130d55f3e516c3dfa20b0d026a566bb.png?compress=1&resize=2048x1537')`}}>
                        <div className="form-input-pickup">
                            <Input icon={<AiOutlineEnvironment />} title={'Berangkat Dari'} value={derparture} listOption={listDerparture} type={'select-option'} onChange={(e) => setDerparture(e.target.value)} />
                            <button className={`btn-reverse ${rotate ? 'rotate' : ''}`} onClick={() => changeDestination()}>
                                <RiArrowLeftRightLine />
                            </button>
                            <Input icon={<AiOutlineEnvironment />} title={'Tujuan'} type={'select-option'} value={arrival} listOption={listArrival} onChange={(e) => setArrival(e.target.value)} />
                            <Input title="Tanggal Berangkat" type="Date" icon={<AiOutlineCalendar />} />
                            <button className='__btn-search' onClick={getPickupList}>
                                <BiSearch />
                            </button>
                        </div>
                        </div>
                        <div className="content-pickup">
                            {
                                showingSchedule()
                            }
                            {
                                renderListPickup()
                            }

                        </div>
                    </div>
                )
            case 'trip':
                return (
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
