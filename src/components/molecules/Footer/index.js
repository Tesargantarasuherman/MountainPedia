import React from 'react'
import { useState } from 'react'
import './index.scss'
export default function Footer() {
    const [theme,setTheme] = useState('light');

    const renderOptionTheme=()=>{
        if(theme == 'dark'){
          return (
            <label className="switch">
              <input type="checkbox" onClick={() =>setTheme('light')} checked />
              <span className="slider round"></span>
            </label>
          )
        }
        else{
          return(
            <label className="switch">
              <input type="checkbox" onClick={() =>setTheme('dark')} />
              <span className="slider round"></span>
            </label>
          )
        }
      }
      const actionSetTheme =(e)=>{
        console.log(e.target.value)
        localStorage.setItem('theme',e.target.value)
      }
    return (
        <div className='footer'>
            <div className="container-content">
                <div className="content">
                    <label> Language</label>
                    <select name="" id="">
                        <option value="">Indonesia</option>
                        <option value="">English(United States)</option>
                    </select>
                    <label> Theme</label>
                    <select name="" id="" onChange={actionSetTheme}>
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                    {/* {renderOptionTheme()} */}
                </div>
                <div className="content">
                    <label> Company</label>
                    <p>About Me</p>
                    <p>About Me</p>
                    <p>About Me</p>
                </div>
                <div className="content">
                    <label>Support</label>
                    <p>About Me</p>
                    <p>About Me</p>
                    <p>About Me</p>
                </div>
                <div className="content">
                    <label> Work With Us</label>
                    <p>About Me</p>
                    <p>About Me</p>
                    <p>About Me</p>
                </div>
            </div>
            <div className="copyright">
                <p>&#169; 2022 Made with &hearts; in Bandung</p>
            </div>
        </div>
    )
}
