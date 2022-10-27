import React from 'react'
import './index.scss'
export default function Button({title,type,rounded}) {
  return (
    <button className={`
      ${type ? type : 'normal'}
      ${rounded ? rounded : 'rounded-sm'}
    `}>
        {title}
    </button>
  )
}
