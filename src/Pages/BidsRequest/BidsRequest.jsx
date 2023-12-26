import { useContext, useEffect, useState } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import axios from 'axios';
import { Table } from 'flowbite-react';
import BidCard from './BidCard/BidCard';

const BidsRequest = () => {
    const { currentUser } = useContext(AuthProvider);
    const [bidRequest, setBidrequest] = useState([])
    const url = `http://localhost:5000/bidRequest?email=${currentUser?.email}`;
    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBidrequest(res.data)
            })
    }, [url, currentUser]);
    console.log(bidRequest)
    return (
        <div className='my-20 md:w-2/3 md:mx-auto w-full'>
            <h1 className='font-bold text-3xl text-center text-[#ddcc70] mb-10'>Bids request page</h1>
            {
                bidRequest.length > 0 ? (
                    <div className="overflow-x-auto">
                        <Table striped>
                            <Table.Head>
                                <Table.HeadCell>Job Title</Table.HeadCell>
                                <Table.HeadCell>Applicant Email</Table.HeadCell>
                                <Table.HeadCell>Application Deadline</Table.HeadCell>
                                <Table.HeadCell>Price</Table.HeadCell>
                                <Table.HeadCell>
                                    <span className="sr-only">Actions</span>
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y gap-5">
                                {
                                    bidRequest.map(result => <BidCard key={result._id} result={result}></BidCard>)
                                }
                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <div>
                        <h2 className='text-center my-5 text-xl'>You do not have any Bid Request</h2>
                    </div>
                )
            }
        </div>
    );
};

export default BidsRequest;