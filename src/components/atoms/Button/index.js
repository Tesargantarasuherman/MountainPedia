import React from 'react'
import './index.scss'
export default function Button({ title, type, rounded, onClick }) {
  return (
    <button className={`button
      ${type ? type : 'normal'}
      ${rounded ? rounded : 'rounded-sm'}
    `}
      onClick={onClick}>
      {title}
    </button>
  )
}
