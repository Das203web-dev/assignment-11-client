import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import axios from 'axios';
import Card from './Card/Card';
import { Helmet } from 'react-helmet-async';

const MyPostedJob = () => {
    const { currentUser } = useContext(AuthProvider);
    console.log('currentuser is', currentUser.email)
    const [myPostedJob, setMyPostedJob] = useState([]);
    const url = `http://localhost:5000/myPostedJob?email=${currentUser?.email}`;
    console.log(url)
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setMyPostedJob(res.data))
    }, [url]);
    console.log("myposted data client side", myPostedJob)
    return (
        <div className='my-20 xl:w-2/3 xl:mx-auto mx-5'>
            <Helmet>
                <title>Job Genie - My Posted Job</title>
            </Helmet>
            <h1 className='text-center font-bold text-2xl mb-3 text-[#ddcc70]'>My posted job page</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    myPostedJob.map(postedJob => <Card key={postedJob._id} job={postedJob}></Card>)
                }
            </div>
        </div>
    );
};

export default MyPostedJob;