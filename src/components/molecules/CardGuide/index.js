import React, { useEffect, useState } from 'react'
import './index.scss'
import ModalGuide from '../ModalGuide'
import { Link } from 'react-router-dom'

function CardGuide() {
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
        <div className='img-card-guide' style={{ backgroundImage: `url('https://a0.muscache.com/im/pictures/airflow/Hosting-714258423682866070/original/960755ad-ce79-4606-8f17-7c2d6c64fe41.jpg?im_w=720')` }}>
          <div className="book-promotor" onClick={()=>actionSetactive()}>
            <div className="book-line"></div>
            <div className="img-promotor" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80')` }} />
          </div>
          <div className="book-promotor1">
          </div>
        </div>
        <Link to='/place'>
        <div className="card-guide-description">
          <label htmlFor="">Valencia, Spanyol</label>
          <p>5 malam <span class="dot"></span>5 juni - 10 juni</p>
        </div>
        </Link>
      </div>
    </>
  )
}

export default CardGuide
