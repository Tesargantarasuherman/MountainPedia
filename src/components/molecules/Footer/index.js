import React from 'react'
import './index.scss'
export default function Footer() {
    return (
        <div className='footer'>
            <div className="container-content">
                <div className="content">
                    <label> Language</label>
                    <select name="" id="">
                        <option value="">Indonesia</option>
                        <option value="">English(United States)</option>
                    </select>
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
