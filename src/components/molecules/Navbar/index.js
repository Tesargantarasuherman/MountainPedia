import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-left">
        <p><Link to='/'>MountainPedia</Link></p>
        </div>
        <div className="navbar-right">
            <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>
                    <Link className='btn-login' to='/sign'>Sign In / Register</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

