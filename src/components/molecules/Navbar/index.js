import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ConfigContext from '../../../context/ConfigContext'
import { toaster } from '../../../utils/toaster'
import './index.scss'
import { AiOutlineUser } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import { verificationToken } from '../../../features/userSlice'

const { AuthContext } = ConfigContext
export default function Navbar() {
  const [mouseEnter, setMouseEnter] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const props_auth = useContext(AuthContext);
  const user = useSelector((state) => state.user.user);
  const isLogin = useSelector((state) => state.user.isLogin)
  const token = localStorage.getItem('token');
  const verification = useSelector((state) => state.user.verification)

  useEffect(() => {
    // props_auth.validationToken()
    // if(token != undefined){
    //   dispatch(verificationToken({
    //     token: token,
    //   }))
    // }
    renderButton()
  }, [user])

  const logout = () => {
    localStorage.removeItem('token')
    // props_auth.validationToken()
    renderButton()
    navigate('/');
    toaster('success', 'Successfully Logout!')
  }

  const actionOnMouseEnter = () => {
    setMouseEnter(!mouseEnter);
  }

  const renderButton = () => {
    // if (props_auth.auth == true) {
    if (token) {
      return (
        <div className='parent-user'>
          <AiOutlineUser onClick={logout} />
          {/* <button type="button" className='btn-login' >Logout</button> */}
          <div className={`user ${mouseEnter ? 'visible' : ''}`}>
            <p>Profile</p>
            <p>Favorite</p>
            <p onClick={logout}>logout</p>
          </div>
        </div>
      )
    }
    else {
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
          <li>Blog</li>
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

