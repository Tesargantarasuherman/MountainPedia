import React from 'react'
import './index.scss'
import { IoCalendarOutline } from 'react-icons/io5'

export default function ContentBenefit() {
    return (
        <div className="___content">
            <div className="icon">
                <IoCalendarOutline />
            </div>
            <div className="___description">
                <label htmlFor="">Lorem ipsum dolor sit amet.</label>
                <p className='___text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem porro dicta fuga incidunt corrupti, qui nisi provident. Quia, at? Aliquam!</p>
            </div>
        </div>
    )
}
