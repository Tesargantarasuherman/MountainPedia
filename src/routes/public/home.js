import DetailDestination from "../../pages/DetailDestination";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
const root = "/";


const home = [
    {
        path: `${root}`,
        component: <Home />,
        navbar: true,
        is_login_access:true,
    },
    {
        path: `${root}detail`,
        component: <DetailDestination />,
        navbar: true,
        is_login_access:false,
    },
    {
        path: `${root}sign`,
        component: <Login />,
        navbar: false,
        is_login_access:false,
    },
];

export default home;
