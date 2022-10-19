import React from 'react'
import { Button } from '../../atoms'
import './index.scss'
import ReactStars from 'react-stars'

export default function Card() {
    return (
        <div className="card">
            <div className="card-header">
                <img src="https://cdn.getyourguide.com/img/tour/044baf9a26946065.jpeg/98.jpg" alt="" className="card-img" />
                <p className="title">
                    <Button title='lorem' type="small" />
                </p>
                <span class="lnr lnr-heart"></span>
                <p className="type">
                    lorem
                </p>
            </div>
            <div className="card-body">
                <p className="title">
                    Lorem, ipsum.
                </p>
                <ReactStars
                    count={5}
                    onChange={null}
                    size={24}
                    color2={'#ffd700'} />
            </div>
        </div>
    )
}
