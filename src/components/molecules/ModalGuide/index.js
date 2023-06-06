import React, { useEffect, useRef, useState } from 'react'
import './index.scss'
import { AiOutlineClose } from 'react-icons/ai'
import { MdVerified } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'

function ModalGuide({active,setActive}) {
    const ref = useRef();

    const handleParentClick = event => {
        event.preventDefault();
    
        if (event.target === event.currentTarget) {
         setActive()
        }
      };

  return (
    <div className={`modal-guide ${active ? 'active':''}`} onClick={handleParentClick}>
                <div className="modal-guide-content">
                    <div className="__icon" onClick={()=>setActive()}>
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
  )
}

export default ModalGuide
