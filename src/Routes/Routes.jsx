import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllJewelry from "../Pages/AllJewelry/AllJewelry";
// import MyToys from "../Pages/MyToys/MyToys";
// import Blogs from "../Pages/Blogs/Blogs";
import Registration from "../Pages/AccessAuthorize/Registration/Registration";
import Login from "../Pages/AccessAuthorize/Login/Login";
import PrivateRoute from "./PrivateRoute";
// import ToyUpdate from "../Pages/MyToys/ToyUpdate";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleJewelry from "../Pages/SingleToy/SingleToy";
import AddJewelry from "../Pages/AddToy/AddToy";

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
                element: <AllJewelry></AllJewelry>
            },
            {
                path: '/my-jewelry',
                // element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: '/add-jewelry',
                element: <PrivateRoute><AddJewelry></AddJewelry></PrivateRoute>
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
                element: <PrivateRoute><SingleJewelry></SingleJewelry></PrivateRoute>,
                loader: ({ params }) => fetch(`https://jewelry-shop-client-side.vercel.app/all-jewelry/${params.id}`)
            },
            {
                path: '/update-jewelry/:id',
                // element: <ToyUpdate></ToyUpdate>,
                loader: ({ params }) => fetch(`https://jewelry-shop-client-side.vercel.app/all-jewelry/${params.id}`)
            }
        ]
    },
]);

export default router;