import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import BidCard from './BidCard/BidCard';
import { Helmet } from 'react-helmet-async';

const MyBids = () => {
    const { currentUser, setLoading } = useContext(AuthProvider);
    const [myBid, setMyBid] = useState([])
    const url = `https://job-genie-u1ji.onrender.com/myBids?email=${currentUser?.email}`
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setMyBid(res.data);
                setLoading(false)
            })
    }, [url, currentUser, setLoading])

    return (
        <div className='my-20 mx-5 lg:w-2/3 lg:mx-auto'>
            <Helmet>
                <title>Job Genie - My Bids</title>
            </Helmet>
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