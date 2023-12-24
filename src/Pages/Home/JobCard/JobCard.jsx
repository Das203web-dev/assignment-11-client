import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../../Provider/Provider';

const JobCard = ({ job }) => {
    const { currentUser } = useContext(AuthProvider);
    // console.log(currentUser.email)
    // console.log(job)
    const { jobDetails, _id } = job;
    console.log(_id)
    const { jobTitle, date, maximumPrice, minimumPrice, description } = jobDetails;

    // const handleBid = () => {

    // }

    return (
        <div className='shadow-sm shadow-slate-300 flex flex-col gap-2 rounded-lg p-5 hover:shadow-md'>
            <div className='flex-grow'>
                <h1 className='font-bold text-xl capitalize'>{jobTitle}</h1>
                <div>
                    <h2>Deadline : {date}</h2>
                    <p>Salary : From <span className='font-medium'>${maximumPrice}</span> to <span className='font-medium'>${minimumPrice}</span></p>
                    <p className='font-bold'>{jobDetails?.email}</p>
                    {
                        description.length > 20 ? <p>{description.slice(0, 20)} <Link to={`/jobDetails/${_id}`} className='text-[#ddcc70]'>...Read more</Link></p> : `${description}`
                    }
                </div>
            </div>
            {currentUser?.email === jobDetails?.email ? <Link to={`/jobDetails/${job._id}`}><button className='p-[10px] bg-[#ddcc70] rounded-lg'>Update</button></Link> : <Link to={`/jobDetails/${job._id}`}><button className='p-[10px] bg-[#ddcc70] rounded-lg'>Bid Now</button></Link>}
        </div>
    );
};

export default JobCard;