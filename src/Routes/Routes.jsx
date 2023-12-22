import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import MyBids from "../Pages/MyBids/MyBids";
import BidsRequest from "../Pages/BidsRequest/BidsRequest";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addJob",
                element: <AddJob></AddJob>
            },
            {
                path: "/myPostedJob",
                element: <MyPostedJob></MyPostedJob>
            },
            {
                path: "/myBids",
                element: <MyBids></MyBids>
            },
            {
                path: "/bidRequest",
                element: <BidsRequest></BidsRequest>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registration></Registration>
            }
        ]
    }
])

export default router;