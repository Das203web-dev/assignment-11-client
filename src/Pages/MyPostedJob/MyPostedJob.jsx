import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import axios from 'axios';
import Card from './Card/Card';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const MyPostedJob = () => {
    const { currentUser } = useContext(AuthProvider);
    const [myPostedJob, setMyPostedJob] = useState([]);
    const url = `http://localhost:5000/myPostedJob?email=${currentUser?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => setMyPostedJob(res.data))
    }, [url, myPostedJob]);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // axios.delete(``)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }
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