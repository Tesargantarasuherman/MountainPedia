import React from 'react'
import './index.scss'

export default function Button({ title, type, rounded, onClick, backgroundColor,icon }) {
  return (
    <button className={`button
      ${type ? type : 'normal'}
      ${rounded ? rounded : 'rounded-sm'}
      ${backgroundColor ? backgroundColor : ''}
    `}
      onClick={onClick}>
      {icon}
      {title}
    </button>
  )
}
