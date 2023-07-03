
import React, { Fragment, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { BannerRegion, Navbar } from '../../components';
import routes from "../../routes/index";
import { useLocation } from "react-router-dom";


// import Sidebar from "../../components/admin/Sidebar";

const Main = (props) => {
    const { pathname } = useLocation();
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[pathname])
    return (
        <>
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
                        (route.is_login_access == true && localStorage.getItem('token') ==null)
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
