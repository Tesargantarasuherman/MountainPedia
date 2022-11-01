import React from 'react'
import { Location } from '../../../assets'
import './index.scss'

function InputForm({ label, icon, gap }) {
  return (
    <>
      <div className="search-form-input">
        <img src={icon} />
        <div>
          <label>
            {label}
          </label>
          {/* <select name="" id="">
            <option value="">choose {label}</option>
          </select> */}
          <input type="date" name="" id="" />
        </div>
      </div>
      {
        gap ? <hr /> : null
      }
    </>
  )
}
export default function SearchForm() {
  return (
    <div className='search-form'>
      <InputForm inputForm label="Type Trip" icon={Location} gap={true} />
      <InputForm inputForm label="Location" icon={Location} gap={true} />
      <InputForm inputForm label="Date" icon={Location} gap={true} />
      <InputForm inputForm label="Person" icon={Location} gap={true} />
      <button>Search</button>
    </div>
  )
}
