import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './index.scss'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import ConfigContext from '../../context/ConfigContext'
import { toaster } from '../../utils/toaster'

const {AuthContext} = ConfigContext

export default function Login() {
    const [activeModal, setActiveModal] = useState(true)
    const [formActive, setFormActive] = useState(true)
    const props_auth = useContext(AuthContext)
    const navigate =useNavigate();

    useEffect(()=>{
        // props_auth.validationToken()
            if(props_auth.auth == true){
               navigate(-1)
            }
    },[])

   

    const actionSetFormActive = () => {
        setFormActive(!formActive)
    }

    const actionLogin =()=>{
        localStorage.setItem('token','123456')
        props_auth.validationToken()
        navigate(-1)
        toaster('success','Successfully Login!')         
    }

    return (
        <motion.div className={`sign ${activeModal ? 'sign-active' : ''}`} >
            <div className="main-sign">
                {/* <button className='close' onClick={() => setActiveModal(!activeModal)}> */}
                <div className="signup">
                    <form>
                        <label onClick={actionSetFormActive} className={`${formActive ? '' : 'active'}`}>Register</label>
                        <input type="text" name="txt" placeholder="User name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="pswd" placeholder="Password" required />
                        <div className='sign-footer'>
                        <button>Sign up</button>
                            <Link to='/'>
                                <button className='close'>
                                    Batal
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
                <div className={`login ${formActive ? 'active' : ''}`}>
                    <form>
                        <label onClick={actionSetFormActive} className={`${formActive ? 'active' : ''}`}>Login</label>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="pswd" placeholder="Password" required />
                        <div className='sign-footer'>
                        <button type="button" onClick={actionLogin}>Login</button>
                            <Link to='/'>
                                <button className='close'>
                                        Batal
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}

