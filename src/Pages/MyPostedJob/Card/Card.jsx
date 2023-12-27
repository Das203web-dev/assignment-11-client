import { Link } from "react-router-dom";

const Card = ({ job, handleDelete }) => {
    const { jobDetails } = job;
    const { category, date, description, email, jobTitle, minimumPrice, maximumPrice } = jobDetails;

    // const { }
    return (
        <div className='shadow-sm shadow-slate-300 flex flex-col justify-between gap-2 rounded-lg p-5 hover:shadow-md'>
            <div className="w-full text-pretty">
                <h1 className='font-bold text-xl capitalize'>{jobTitle}</h1>
                <h1 className='font-bold text-lg capitalize'>{category}</h1>
                <div className="text-pretty">
                    <h2>Deadline : {date}</h2>
                    <p>Salary : From <span className='font-medium'>${minimumPrice}</span> to <span className='font-medium'>${maximumPrice}</span></p>
                    <p className='overflow-hidden'>{email}</p>
                    <p>{description}</p>
                </div>
            </div>
            <div className="flex items-center justify-between w-full">
                <Link to={`/update/${job._id}`}><button className='p-[10px] bg-[#ddcc70] rounded-lg'>Update</button></Link>
                <Link><button onClick={() => handleDelete(job._id)} className='p-[10px] bg-[#ddcc70] rounded-lg'>Delete</button></Link>
            </div>
        </div>
    );
};

export default Card;