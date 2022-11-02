import DetailDestination from "../../pages/DetailDestination";
import Home from "../../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
const root = "/";



const home = [
    {
        path: `${root}`,
        component: <Home />,
        navbar: true,
        is_user:false,
    },
    {
        path: `${root}detail`,
        component: <DetailDestination />,
        navbar: true,
        is_user:false,
    },
];

export default home;
