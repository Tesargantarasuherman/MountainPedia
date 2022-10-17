import React from 'react'
import './index.scss'
export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="navbar-left">
        <p>MountainPedia</p>
        </div>
        <div className="navbar-right">
            <ul>
                <li>lorem</li>
                <li>lorem</li>
                <li>lorem</li>
                <li>
                    <button>Sign In / Register</button>
                </li>
            </ul>
        </div>
    </div>
  )
}
