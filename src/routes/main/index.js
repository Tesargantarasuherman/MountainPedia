
import React, { useEffect } from 'react'
import { Navigate, Route, Routes} from "react-router-dom";
import { BannerRegion, Navbar } from '../../components';
import routes from "../../routes/index";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { verificationToken} from '../../features/userSlice';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

// import Sidebar from "../../components/admin/Sidebar";

const Main = (props) => {
    const dispatch = useDispatch();
    const verification = useSelector((state) => state.user.verification)
    const token = localStorage.getItem('token');

    const { pathname } = useLocation();
    useEffect(()=>{
         dispatch(verificationToken({
            token: token,
          }))
          window.scrollTo(0, 0);
    },[pathname])
    
    return (
        <>
        <ToastContainer />
            {/* Navbar ----------------------------- */}
            <Routes>
                {routes.map((route) => {
                    if (route.navbar)
                        return <Route path={route.path} element={<Navbar />} />;
                })}
            </Routes>
            <Routes>
                {routes.map((route) => {
                    if (route.bannerRegion)
                        return <Route path={route.path} element={<BannerRegion/>} />;
                })}
            </Routes>

            {/* ---------------------------------- */}
            {/* Render Sidebar */}
            {/* <div style={{display:'flex',flexWrap:'wrap'}}> */}
            {/* <Routes>
                {routes.map((route) => {
                    if (route.sidebar)
                        return <Route path={route.path} element={<Sidebar />} />;
                })}
            </Routes> */}

            {/* Render Page */}
            <Routes>
                {routes.map((route) => {
                    return <Route path={route.path} element={
                        (route.is_login_access == true && verification?.isLogin ==false)
                            ? (
                                <Navigate to={'/sign'} />
                            ) : route.component
                    } />
                })}
            </Routes>
            {/* </div> */}
        </>
    )
}


export default Main
