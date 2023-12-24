import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
    console.log(job);
    const { jobDetails, _id } = job;
    const { category, date, description, jobTitle, maximumPrice, minimumPrice } = jobDetails;
    return (
        <div className='md:w-2/3 w-full mx-auto my-10'>
            <h1 className='text-center font-bold text-3xl mb-5 text-[#ddcc70]'>Job Details</h1>
            <div className='mx-auto flex text-center flex-col p-5 rounded-lg space-y-2 shadow-md shadow-slate-300 border'>
                <h1 className='font-bold capitalize text-2xl'>{category}</h1>
                <h2 className='font-bold capitalize text-xl'>{jobTitle}</h2>
                <h2>Last Date : {date}</h2>
                <p className='md:w-2/3 mx-auto w-full'>Description : <span>{description}</span></p>
                <p className='font-semibold text-xl'>Salary : ${maximumPrice} to ${minimumPrice}</p>
                <Link className='flex mx-auto mt-2' to={`/jobDetails/${_id}/placeBid`}><button className='p-[10px] bg-[#ddcc70] rounded-lg'>Place Your Bid</button></Link>
            </div>

        </div>
    );
};

export default JobDetails;