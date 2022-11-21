
import React, { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { Navbar } from '../../components';
import Login from '../../pages/Login';
import routes from "../../routes/index";

// import Sidebar from "../../components/admin/Sidebar";

const Main = (props) => {
    const navigate = useNavigate();
    return (
        <>
            {/* Navbar ----------------------------- */}
            <Routes>
                {routes.map((route) => {
                    if (route.navbar)
                        return <Route path={route.path} element={<Navbar />} />;
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
