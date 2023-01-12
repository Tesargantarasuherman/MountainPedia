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
    const [initialY, setInitialY] = useState(-240)
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
        if (initialY == 25) {
            setInitialY(-240)
        }
        else {
            setInitialY(25)
        }
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
                <button className='close' onClick={()=>{navigate(-2)}}>
                {/* <button className='close'> */}
                    {/* <Link to='/'> */}
                        X
                    {/* </Link> */}
                </button>
                <div className="signup">
                    <form>
                        <label onClick={actionSetFormActive} className={`${formActive ? '' : 'active'}`}>Register</label>
                        <input type="text" name="txt" placeholder="User name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="pswd" placeholder="Password" required />
                        <button>Sign up</button>
                    </form>
                </div>
                <motion.div animate={{ y: initialY, transition: { delay: 0.2, x: { duration: 2 }, default: { ease: "linear" } } }} className="login">
                    <form>
                        <label onClick={actionSetFormActive} className={`${formActive ? 'active' : ''}`}>Login</label>
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="pswd" placeholder="Password" required />
                        <button type="button" onClick={actionLogin}>Login</button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    )
}

