import React from 'react'
import { Location } from '../../../assets'
import './index.scss'

function InputType({ type,label }) {
  switch (type) {
    case "text":
      return <input type="text" name="" id="" placeholder={`Input a ${label}`}/>
    case "date":
      return <input type="date" name="" id="" />
    case "select-option":
      return (<select name="" id="">
        <option value="">Choose {label}</option>
      </select>)
    default:
      return <input type="text" name="" id="" placeholder={`Input a ${label}`}/>
  }
}
function InputForm({ label, icon, gap, type }) {
  return (
    <>
      <div className="search-form-input">
        <img src={icon} />
        <div>
          <label>
            {label}
          </label>
          <InputType type={type} label={label}/>
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
      <InputForm type="select-option" label="Type" icon={Location} gap={true} />
      <InputForm type="text" label="Location" icon={Location} gap={true} />
      <InputForm type="date" label="Date" icon={Location} gap={true} />
      <InputForm type="select-option" label="Person" icon={Location} gap={true} />
      <button>Search</button>
    </div>
  )
}
