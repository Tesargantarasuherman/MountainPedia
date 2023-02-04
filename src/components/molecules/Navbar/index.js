import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ConfigContext from '../../../context/ConfigContext'
import { toaster } from '../../../utils/toaster'
import './index.scss'

const {AuthContext} = ConfigContext
export default function Navbar() {
  const navigate = useNavigate()

  const props_auth = useContext(AuthContext);
  
  useEffect(()=>{
    props_auth.validationToken()
    renderButton()
  },[])
  
  const logout =()=>{
    localStorage.removeItem('token')
    props_auth.validationToken()
    renderButton()
    navigate('/');
    toaster('success','Successfully Logout!')         

  }
  const renderButton =()=>{
    if (props_auth.auth == true) {
      return (
        <button type="button" className='btn-login' onClick={logout}>Logout</button>
      )
    }
    else{
      return <Link className='btn-login' to='/sign'>Sign In / Register</Link>
    }
  }

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
                  {renderButton()}
                    {/* <Link className='btn-login' to='/sign'>Sign In / Register</Link> */}
                </li>
            </ul>
        </div>
    </div>
  )
}

