import React from 'react'
import { Datetime } from '../../../assets'
import './index.scss'

function Input() {
  return (
    <>
    <div className="container-input">
        <img src={Datetime}/>
        <input className='input' type="text" placeholder='Loremipsum' />
    </div>
    </>
  )
}

export default Input