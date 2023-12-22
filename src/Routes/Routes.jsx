import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import MyBids from "../Pages/MyBids/MyBids";
import BidsRequest from "../Pages/BidsRequest/BidsRequest";
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
            }
        ]
    }
])

export default router;