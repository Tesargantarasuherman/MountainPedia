import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './index.scss'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [activeModal, setActiveModal] = useState(true)
    const [initialY, setInitialY] = useState(-240)
    const [formActive, setFormActive] = useState(true)
    const navigate =useNavigate();

    useEffect(()=>{
        let token = localStorage.getItem('token');
            if(token && token !=''){
               navigate('/')
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
    return (
        <motion.div className={`sign ${activeModal ? 'sign-active' : ''}`} >
            <div className="main-sign">
                <button className='close' onClick={() => setActiveModal(!activeModal)}>
                    X
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
                        <button onClick={()=>localStorage.setItem('token','123456')}>Login</button>
                    </form>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Login