import React from 'react'
import { Location } from '../../../assets'
import './index.scss'

function InputForm({label,icon,gap}) {
  return (
    <>
      <div className="search-form-input">
        <label>
          <img src={icon} /> {label}
        </label>
        <select name="" id="">
          <option value="">lorem</option>
        </select>
      </div>
      {
        gap ? <hr/> : null
      }
    </>
  )
}
export default function SearchForm() {
  return (
    <div className='search-form'>
      <InputForm inputForm label ="Type Trip" icon={Location} gap={true}/>
      <InputForm inputForm label ="Type Trip" icon={Location} gap={true}/>
      <InputForm inputForm label ="Type Trip" icon={Location} gap={true}/>
      <InputForm inputForm label ="Type Trip" icon={Location} gap={true}/>
      <InputForm inputForm label ="Type Trip" icon={Location} gap={false}/>
      <button>Search</button>
    </div>
  )
}
