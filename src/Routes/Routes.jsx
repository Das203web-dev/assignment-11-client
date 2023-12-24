import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import AddJob from "../Pages/AddJob/AddJob";
import MyPostedJob from "../Pages/MyPostedJob/MyPostedJob";
import MyBids from "../Pages/MyBids/MyBids";
import BidsRequest from "../Pages/BidsRequest/BidsRequest";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";
import JobDetails from "../components/JobDetails/JobDetails";
import PlaceBid from "../components/PlaceBid/PlaceBid";
import ErrorPage from "../Pages/404/ErrorPage";
import Update from "../components/Update/Update";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // loader: () => fetch('http://localhost:5000/category')
            },
            {
                path: "/addJob",
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: "/myPostedJob",
                element: <PrivateRoute><MyPostedJob></MyPostedJob></PrivateRoute>
            },
            {
                path: "/myBids",
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
            },
            {
                path: "/bidRequest",
                element: <PrivateRoute><BidsRequest></BidsRequest></PrivateRoute>
            },
            {
                path: "/jobDetails/:id",
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobDetails/${params.id}`)
            },
            {
                path: "/jobDetails/:id/placeBid",
                element: <PlaceBid></PlaceBid>,
                loader: ({ params }) => fetch(`http://localhost:5000/jobDetails/${params.id}/placeBid`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registration></Registration>
            },
            {
                path: "/update/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/update/${params.id}`)
            }
        ]
    }
])

export default router;