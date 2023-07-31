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
import { login, register, verificationToken } from '../../features/userSlice'
import { Formik } from 'formik'
import * as Yup from "yup";
import { toast } from 'react-hot-toast'

const { AuthContext } = ConfigContext

export default function Login() {
    const [formActive, setFormActive] = useState(true)
    const props_auth = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user);
    const isLoading = useSelector((state) => state.user.isLoading)
    const isLogin = useSelector((state) => state.user.isLogin)
    const verification = useSelector((state) => state.user.verification)
    const token = localStorage.getItem('token');

    useEffect(() => {
        if(verification?.isLogin == true){
            navigate(-1)
        }
        if (user?.data_user) {
            localStorage.setItem('token', user?.token)
            navigate(-1)
            if(user?.message){
                console.log(user?.message)
                // toaster('success', user?.message)
            }
        }

    }, [user])


    const actionSetFormActive = () => {
        setFormActive(!formActive)
    }

    const handleLogin = (values) => {
        dispatch(login(values))
    }
    const handleRegister = (values) => {
        dispatch(register({
            name: values.name,
            email: values.email,
            password: values.password,
            role: 1
        }))
    }

    return (
        <motion.div className='sign' >
            <div className='title'>
                <h1>Silahkan Masuk, Untuk Melanjutkan</h1>
            </div>
            <div className="main-sign">
                {/* <button className='close' onClick={() => setActiveModal(!activeModal)}> */}
                <div className="signup">
                    <Formik
                        onSubmit={values => {
                            handleRegister(values)
                        }}
                        initialValues={{
                            name:name,
                            email: email,
                            password: password
                        }}
                        validationSchema={Yup.object().shape({
                            name: Yup.string().required('Nama harus diisi'),
                            email: Yup.string().email("Email invalid").required('Email harus diisi'),
                            password: Yup.string()
                                .required('Password harus diisi')
                                .min(8, 'Password is too short - should be 8 chars minimum.')
                                .matches(/[a-zA-Z0-9]/, 'Password can only contain Latin letters.')
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
                                    <label onClick={actionSetFormActive} className={`${formActive ? '' : 'active'}`}>Register</label>
                                    <input type="text" name="name" placeholder="User name" value={values.name} onChange={handleChange} />
                                    {errors.name && touched.name && (
                                        <div className="input-feedback">{errors.name}</div>
                                    )}
                                    <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
                                    {errors.email && touched.email && (
                                        <div className="input-feedback">{errors.email}</div>
                                    )}
                                    <input type="password" name="password" placeholder="Password"  value={values.password} onChange={handleChange} />
                                    {errors.password && touched.password && (
                                        <div className="input-feedback">{errors.password}</div>
                                    )}
                                    <div className='sign-footer'>
                                        <button type='submit'>{isLoading ? 'Loading..' : 'Sign Up'}</button>
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
                <div className={`login ${formActive ? 'active' : ''}`}>
                    <Formik
                        onSubmit={values => {
                            handleLogin(values)
                        }}
                        initialValues={{
                            email: email,
                            password: password
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().email("Email invalid").required('Email harus diisi'),
                            password: Yup.string().required('Password harus diisi')
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

