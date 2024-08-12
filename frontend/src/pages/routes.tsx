import { createBrowserRouter } from "react-router-dom";

import Auth from "pages/Auth";
import Main from 'pages/MainPage';
import Layout from "pages/Layout";


export default createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
           {path: "/", element: <Main/>},
           {path: "/auth/:modeForm", element: <Auth/>}
        ]
    },
]);