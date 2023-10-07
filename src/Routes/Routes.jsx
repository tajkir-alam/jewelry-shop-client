import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
// import AllToys from "../Pages/AllToys/AllToys";
// import MyToys from "../Pages/MyToys/MyToys";
// import Blogs from "../Pages/Blogs/Blogs";
// import AddToy from "../Pages/AddToy/AddToy";
import Registration from "../Pages/AccessAuthorize/Registration/Registration";
import Login from "../Pages/AccessAuthorize/Login/Login";
// import SingleToy from "../Pages/SingleToy/SingleToy";
// import PrivateRoute from "./PrivateRoute";
// import ToyUpdate from "../Pages/MyToys/ToyUpdate";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/all-jewelry',
                // element: <AllToys></AllToys>
            },
            {
                path: '/my-jewelry',
                // element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/add-jewelry',
                // element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: '/blogs',
                // element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Registration></Registration>
            },
            {
                path: '/jewelry/:id',
                // element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://trov-titans-server-data.vercel.app/alltoys/${params.id}`)
            },
            {
                path: '/update-jewelry/:id',
                // element: <ToyUpdate></ToyUpdate>,
                loader: ({ params }) => fetch(`https://trov-titans-server-data.vercel.app/alltoys/${params.id}`)
            }
        ]
    },
]);

export default router;