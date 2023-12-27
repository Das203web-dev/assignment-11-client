import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Provider/Provider';
import { Button, Checkbox, Label, Modal, Select, TextInput, Textarea } from 'flowbite-react';
import axios from 'axios';

const JobCard = ({ job }) => {
    const { currentUser } = useContext(AuthProvider);
    const [checkDate, setCheckDate] = useState()
    // const {datas} = useContext(AuthProvider)
    // console.log(currentUser.email)
    // console.log(job)
    const { jobDetails, _id } = job;
    const { jobTitle, date, maximumPrice, minimumPrice, description } = jobDetails;
    const formDate = new Date(date);
    const currentDate = new Date();
    return (
        <div className='shadow-sm shadow-slate-300 flex flex-col gap-5 mb-5 rounded-lg p-2 hover:shadow-md'>
            <div className='flex-grow'>
                <h1 className='font-bold text-xl capitalize'>{jobTitle}</h1>
                <div>
                    <h2>Deadline : {date}</h2>
                    <p>Salary : From <span className='font-medium'>${minimumPrice}</span> to <span className='font-medium'>${maximumPrice}</span></p>
                    <p className='font-normal'>{jobDetails?.email}</p>
                    {
                        description.length > 20 ? <p>{description.slice(0, 150)} <Link to={`/jobDetails/${_id}`} className='text-[#ddcc70]'>...Read more</Link></p> : `${description}`
                    }
                </div>
            </div>
            {currentUser?.email === jobDetails?.email ? <Link to={`/jobDetails/${job._id}`}><button className='p-[10px] bg-[#ddcc70] rounded-lg btn-'>Details</button></Link> : <Link to={`/jobDetails/${job._id}`}><button disabled={formDate < currentDate} className={`p-[10px]  rounded-lg ${formDate < currentDate ? "bg-[#ddcd7081] cursor-not-allowed" : "bg-[#ddcc70] "}`}>Bid Now</button></Link>}
        </div >
    );
};

export default JobCard;