import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import { AiFillStar, AiOutlineClose } from 'react-icons/ai'
import { MdVerified } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'
import { FaLanguage, FaMapMarkedAlt, FaSuitcase } from 'react-icons/fa'
import Slider from 'react-slick'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'
import { GrPrevious,GrNext} from "react-icons/gr";

function ModalGuide({ active, setActive }) {
    const slider = useRef();

    const setting = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
    };

    const handleParentClick = event => {
        event.preventDefault();

        if (event.target === event.currentTarget) {
            setActive()
        }
    };

    return (
        <div className={`modal-guide ${active ? 'active' : ''}`} onClick={handleParentClick}>
            <div className="modal-guide-content">
                <div className="__icon" onClick={() => setActive()}>
                    <AiOutlineClose />
                </div>
                <div className="info-guide">
                    <div className="detail-name">
                        <div className="__img-guide" style={{ backgroundImage: `url(https://a0.muscache.com/im/pictures/user/08586a25-5872-4b47-97b4-5d74678b9877.jpg?im_w=240)` }}>
                            <MdVerified />
                        </div>
                        <div className="guide-name">
                            <p>Tesar Gantara Suherman </p>
                            <p><IoLocationSharp /> Indonesia</p>
                        </div>
                    </div>
                    {/* Rating Guide */}
                    <div className="rating-guide">
                        <div className='content-rating'>
                            <p>3</p>
                            <p>ulasan</p>
                        </div>
                        <hr />
                        <div className='content-rating'>
                            <p>4.6<AiFillStar/></p>
                            <p>Nilai</p>
                        </div>
                        <hr />
                        <div className='content-rating'>
                            <p>10</p>
                            <p>Tahun Pengalaman</p>
                        </div>
                    </div>
                </div>
                <div className="description-guide">
                    <div className="item-description-guide">
                        <div className="___icon">
                            <FaSuitcase />
                        </div>
                        <div className="text-item-description">
                            <p>Pekerjaan saya : Petani</p>
                        </div>
                    </div>
                    <div className="item-description-guide">
                        <div className="___icon">
                            <FaLanguage />
                        </div>
                        <div className="text-item-description">
                            <p>Berbicara dalam Inggris, Prancis, Italia, Spanyol</p>
                        </div>
                    </div>
                    <div className="item-description-guide">
                        <div className="___icon">
                            <FaMapMarkedAlt />
                        </div>
                        <div className="text-item-description">
                            <p>Tinggal di Palermo, Italia</p>
                        </div>
                    </div>
                    <div className="text-description-guide">
                        <p>Saya suka musik (dari awal sampai elektronik), saya suka teater, film, tari, sastra. Saya senang bersepeda gunung, mendaki, dan menunggang kuda sebisa mungkin. Saya suka hewan, tetapi saya lebih suka mereka tinggal di alam liar. Saya seorang seniman visual, bekerja sebagian besar dalam proyek registrasi. Saya senang bertemu dengan orang - orang baru dan berbagi momen hari saya dengan tamu.</p>
                    </div>
                    <div className="review-guide">
                        <div className="review-guide-title">
                            Ulasan untuk, Tesar Gantara Suherman
                        </div>
                        <div className="review-guide-content">
                            <div className="navigate">
                            <button className="btn-prev" onClick={() => slider?.current?.slickPrev()} >
                                <GrPrevious />
                            </button>
                            <button className="btn-next" onClick={() => slider?.current?.slickNext()}>
                                <GrNext />
                            </button>
                            </div>
                            <Slider ref={slider} {...setting} className='slider-review'>
                                <div className="content-review">
                                    <div className='comment-review'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde iste accusamus quo quia nam rem vitae cumque necessitatibus placeat, adipisci, natus aliquid et facilis. Id nesciunt amet nisi porro.</p>
                                    </div>
                                    <div className="profile-content-review">
                                        <div className="__img-profile" style={{ backgroundImage: `url(https://a0.muscache.com/im/pictures/user/08586a25-5872-4b47-97b4-5d74678b9877.jpg?im_w=240)` }} />
                                        <div className="__name-profile">
                                            <p>Joel</p>
                                            <p>02 Mei 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-review">
                                    <div className='comment-review'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde iste accusamus quo quia nam rem vitae cumque necessitatibus placeat, adipisci, natus aliquid et facilis. Id nesciunt amet nisi porro.</p>
                                    </div>
                                    <div className="profile-content-review">
                                        <div className="__img-profile" style={{ backgroundImage: `url(https://a0.muscache.com/im/pictures/user/08586a25-5872-4b47-97b4-5d74678b9877.jpg?im_w=240)` }} />
                                        <div className="__name-profile">
                                            <p>Joel</p>
                                            <p>02 Mei 2023</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-review">
                                    <div className='comment-review'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde iste accusamus quo quia nam rem vitae cumque necessitatibus placeat, adipisci, natus aliquid et facilis. Id nesciunt amet nisi porro.</p>
                                    </div>
                                    <div className="profile-content-review">
                                        <div className="__img-profile" style={{ backgroundImage: `url(https://a0.muscache.com/im/pictures/user/08586a25-5872-4b47-97b4-5d74678b9877.jpg?im_w=240)` }} />
                                        <div className="__name-profile">
                                            <p>Joel</p>
                                            <p>02 Mei 2023</p>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalGuide
