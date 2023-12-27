import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthProvider } from '../../Provider/Provider';
import { Helmet } from 'react-helmet-async';

const JobDetails = () => {
    const job = useLoaderData();
    const { currentUser } = useContext(AuthProvider);
    console.log(job);
    const { jobDetails, _id } = job;
    const { category, date, description, jobTitle, maximumPrice, minimumPrice, email } = jobDetails;
    return (
        <div className='md:w-2/3 md:mx-auto mx-5 my-10'>
            <Helmet>
                <title>Job Genie - Job Details</title>
            </Helmet>
            <h1 className='text-center font-bold text-3xl mb-5 text-[#ddcc70]'>Job Details</h1>
            <div className='mx-auto flex text-center flex-col p-5 rounded-lg space-y-2 shadow-md shadow-slate-300 border'>
                <h1 className='font-bold capitalize text-2xl'>{category}</h1>
                <h2 className='font-bold capitalize text-xl'>{jobTitle}</h2>
                <h2>Last Date : {date}</h2>
                <p className='md:w-2/3 mx-auto w-full'>Description : <span>{description}</span></p>
                <p className='font-semibold text-xl'>Salary : ${minimumPrice} to ${maximumPrice}</p>
                {
                    currentUser?.email === email ? <Link className=' mt-2 p-[10px] rounded-lg bg-[#ddcc70] flex mx-auto' to={`/update/${_id}`}>Update</Link> : <Link className='flex mx-auto mt-2' to={`/jobDetails/${_id}/placeBid`}><button className='p-[10px] bg-[#ddcc70] rounded-lg'>Place Your Bid</button></Link>
                }
            </div>

        </div>
    );
};

export default JobDetails;