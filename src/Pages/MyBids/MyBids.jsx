import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import BidCard from './BidCard/BidCard';

const MyBids = () => {
    const { currentUser } = useContext(AuthProvider);
    console.log(currentUser.email);
    const [myBid, setMyBid] = useState([])
    const url = `http://localhost:5000/myBids?email=${currentUser?.email}`
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setMyBid(res.data)
            })
    }, [url, currentUser])
    // console.log(myBid);

    return (
        <div className='my-20 mx-5 md:w-1/2 md:mx-auto'>
            <h1 className='font-bold text-3xl text-[#ddcc70] mb-10 text-center'>Your Bid Request</h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    myBid.map(bid => <BidCard key={bid._id} bid={bid}></BidCard>)
                }
            </div>
        </div>
    );
};

export default MyBids;