import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import './index.scss'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import ConfigContext from '../../context/ConfigContext'
import { toaster } from '../../utils/toaster'
import { useDispatch, useSelector } from 'react-redux'
import { login, selectUser } from '../../features/userSlice'
import { Formik } from 'formik'
import * as Yup from "yup";

const { AuthContext } = ConfigContext

export default function Login() {
    const [formActive, setFormActive] = useState(true)
    const props_auth = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector(selectUser);

    useEffect(() => {
        // props_auth.validationToken()
        if (user && user.isLogin == true) {
            navigate("/")
        }
    }, [user])



    const actionSetFormActive = () => {
        setFormActive(!formActive)
    }

    const actionLogin = () => {
        dispatch(login({
            email: email,
            password: password,
            loggedIn: true
        }))
        localStorage.setItem('token', '123456')        // localStorage.setItem('token', '123456')
        props_auth.validationToken()
        navigate(-1)
        toaster('success', 'Successfully Login!')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true
        }))
        localStorage.setItem('token', '123456')
        // // props_auth.validationToken()
        // navigate(-1)
        // toaster('success', 'Successfully Login!')
    }

    return (
        <motion.div className='sign' >
            <div className='title'>
                <h1>Silahkan Masuk, Untuk Melanjutkan</h1>
            </div>
            <div className="main-sign">
                {/* <button className='close' onClick={() => setActiveModal(!activeModal)}> */}
                <div className="signup">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label onClick={actionSetFormActive} className={`${formActive ? '' : 'active'}`}>Register</label>
                        <input type="text" name="name" placeholder="User name" required value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="email" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" name="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
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
                    <Formik
                        onSubmit={actionLogin}
                        initialValues={{
                            email: email,
                            password: password
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email("Email invalid").required('Email harus diisi'),
                            password: Yup.string()
                                .required('Password harus diisi')
                                .min(8, 'Password is too short - should be 8 chars minimum.')
                                .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
                        })}
                    >
                        {(props) => {
                            const {
                                values,
                                touched,
                                errors,
                                dirty,
                                isSubmitting,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                handleReset
                            } = props;
                            return (
                                <form onSubmit={handleSubmit}>
                                    <label onClick={actionSetFormActive} className={`${formActive ? 'active' : ''}`}>Login</label>
                                    <input type="email" name="email" placeholder="Email" id='email' value={values.email} onChange={handleChange} />
                                    {errors.email && touched.email && (
                                        <div className="input-feedback">{errors.email}</div>
                                    )}
                                    <input type="password" name="password" placeholder="Password" id='password' value={values.password} onChange={handleChange} />
                                    {errors.password && touched.password && (
                                        <div className="input-feedback">{errors.password}</div>
                                    )}
                                    <div className='sign-footer'>
                                        {/* <button type="button" onClick={actionLogin}>Login</button> */}
                                        <button type="submit" >Login</button>
                                        <Link to='/'>
                                            <button className='close'>
                                                Batal
                                            </button>
                                        </Link>
                                    </div>
                                </form>
                            )
                        }}

                    </Formik>

                </div>
            </div>
        </motion.div>
    )
}

