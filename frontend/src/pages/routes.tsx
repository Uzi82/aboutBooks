import { createBrowserRouter } from "react-router-dom";

import {SignIn, SignUp} from "pages/Sign";
import Main from 'pages/MainPage';
import Layout from "pages/Layout";
import BookCreator from "pages/BookCreator";


export default createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
           {path: "/", element: <Main/>},
           {path: "/signin", element: <SignIn/>},
           {path: "/signup", element: <SignUp/>},
           {path: "/creatbook", element: <BookCreator/>},
        ]
    },
]);