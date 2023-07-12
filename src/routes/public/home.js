import { DetailDestination, DetailPlace, Home, Login, NotFound, Region } from "../../pages";

const root = "/";


const home = [
    {
        path: `${root}`,
        component: <Home />,
        bannerRegion:false,
        navbar: true,
        is_login_access:false,
    },
    {
        path: `${root}detail/:id`,
        component: <DetailDestination />,
        navbar: true,
        is_login_access:true,
    },
    {
        path: `${root}sign`,
        component: <Login />,
        navbar: false,
        is_login_access:false,
    },
    {
        path: `${root}place`,
        component: <DetailPlace/>,
        navbar: true,
        is_login_access:true,
    },
    {
        path: `${root}region`,
        component: <Region/>,
        navbar: true,
        is_login_access:true,
    },
    {
        path: `*`,
        component: <NotFound/>,
        navbar: false,
        is_login_access:false,
    },
];

export default home;
