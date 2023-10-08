import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllJewelry from "../Pages/AllJewelry/AllJewelry";
import Blogs from "../Pages/Blogs/Blogs";
import Registration from "../Pages/AccessAuthorize/Registration/Registration";
import Login from "../Pages/AccessAuthorize/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import SingleJewelry from "../Pages/SingleJewelry/SingleJewelry";
import AddJewelry from "../Pages/AddJewelry/AddJewelry";
import MyJewelry from "../Pages/MyJewelry/MyJewelry";
import JewelryUpdate from "../Pages/MyJewelry/JewelryUpdate";
import DashboardLayout from "../layout/DashboardLayout";

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
                element: <PrivateRoute><MyJewelry></MyJewelry></PrivateRoute>
            },
            {
                path: '/add-jewelry',
                element: <PrivateRoute><AddJewelry></AddJewelry></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
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
                element: <JewelryUpdate></JewelryUpdate>,
                loader: ({ params }) => fetch(`https://jewelry-shop-client-side.vercel.app/all-jewelry/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: <Login />
            }
        ]
    }
]);

export default router;