import React from 'react'
import { Datetime } from '../../../assets'
import './index.scss'

function Input({ title, type, icon,onChange,value,listOption,min,max,name }) {

  const renderType = (type) => {
    switch (type) {
      case 'select-option':
        return (
          <select name={name} value={value} onChange={onChange}>
            <option value="" >Silahkan Pilih {title}</option>
            {
              listOption.map(list=>(
                <option value={list.value} >{list.title}</option>
              ))
            }
          </select>
        )
      default:
        return(
          <input className='input' value={value} type={type} onChange={onChange} placeholder={`Masukkan ${title}`} min={min} max={max}/>
        )
    }
  }
  return (
    <>
      <div className="container-input">
        <div>
          {icon}
        </div>
        <div>
          <label htmlFor="">{title}</label>
          {renderType(type)}
        </div>
      </div>
    </>
  )
}

export default Input