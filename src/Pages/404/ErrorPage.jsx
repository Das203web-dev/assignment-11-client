import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div className='flex flex-col gap-5 justify-center md:w-2/3 w-full mx-auto '>
            <img className='w-full' src="https://i.ibb.co/pjmPHHX/404-errors-1536x891.png" alt="" />
            <Link className='bg-[#ddcc70] text-black w-1/2 mx-auto p-[10px] rounded-lg text-center' to={'/'}>Go Home</Link>
        </div>
    );
};

export default ErrorPage;