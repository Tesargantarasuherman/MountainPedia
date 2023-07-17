import React, { useEffect, useState } from 'react'
import './index.scss'
import ModalGuide from '../ModalGuide'
import { Link } from 'react-router-dom'
import moment from 'moment'


function CardGuide({type,id,title,image,price,location,date,start_date,end_date,participant}) {
  const [active, setActive] = useState(false)
  useEffect(()=>{
  },)
  const actionSetactive =()=>{
    setActive(!active)
    if(active){
      document.body.style.overflow = "scroll";
    }
    else{
      document.body.style.overflow ="hidden";
    }
  }
  return (
    <>
      <ModalGuide active={active} setActive={actionSetactive}/>
      <div className="card-guide">
        <span className='___type'> {type}</span> 
        <div className='img-card-guide' style={{ backgroundImage: `url(${image})` }}>
          <div className="book-promotor" onClick={()=>actionSetactive()}>
            <div className="book-line"></div>
            <div className="img-promotor" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80')` }} />
          </div>
          <div className="book-promotor1">
          </div>
        </div>
        <Link to='/place'>
        <div className="card-guide-description">
          <p>{location}<span class="dot"></span> {participant}</p>
          <p>{date} hari <span class="dot"></span> {start_date} - {end_date} </p>
          <p>Rp. {price?.toLocaleString('en-US')}</p>
        </div>
        </Link>
      </div>
    </>
  )
}

export default CardGuide
