import React from 'react'
import './index.scss'
export default function Button({title,type}) {
  return (
    <button className={`${type ? type : 'normal'}`}>
        {title}
    </button>
  )
}
