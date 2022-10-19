import React from 'react'
import { Button } from '../../atoms'
import './index.scss'
export default function Card() {
  return (
    <div className="card">
        <img src="https://cdn.getyourguide.com/img/tour/044baf9a26946065.jpeg/98.jpg" alt="" className="card-img" />
        <p className="title">
            <Button title='lorem' type="small"/>
        </p>
        <span class="lnr lnr-heart"></span>
    </div>
  )
}
