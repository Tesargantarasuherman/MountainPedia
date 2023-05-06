import React from 'react'
import { Datetime } from '../../../assets'
import './index.scss'

function Input({title,type,icon}) {
  return (
    <>
    <div className="container-input">
      <div>
          {icon}
      </div>
        <div>
          <label htmlFor="">{title}</label>
          <input className='input' type={type} placeholder='Loremipsum' />
        </div>
    </div>
    </>
  )
}

export default Input