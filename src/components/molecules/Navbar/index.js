import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-left">
        <p><Link to='/'>MountainPedia </Link></p>
        </div>
        <div className="navbar-right">
            <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>
                    <button className='btn-login'>Sign In / Register</button>
                </li>
            </ul>
        </div>
    </div>
  )
}
